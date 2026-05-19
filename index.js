/*
══════════════════════════════════════════
      OZU CRASHER V2 - WEB PAIR SERVER
          OWNER: BAD_BOI STILLCHASING
       TELEGRAM: @badboistillchasing
══════════════════════════════════════════
*/

const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  DisconnectReason,
  Browsers,
  getContentType,
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const crypto = require("crypto");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

// ============ EXPRESS + SOCKET.IO ============
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
  pingTimeout: 60000,
  pingInterval: 25000,
});
const PORT = process.env.PORT || 3000;

// ============ DB PATHS ============
const DB_DIR = path.join(__dirname, "database");
const SESSIONS_DIR = path.join(__dirname, "sessions");
const USERS_FILE = path.join(DB_DIR, "users.json");
const TOKENS_FILE = path.join(DB_DIR, "sessions_map.json");

// Ensure dirs & files exist on startup
[DB_DIR, SESSIONS_DIR].forEach((d) => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});
const ensureFile = (f, def) => { if (!fs.existsSync(f)) fs.writeFileSync(f, def); };
ensureFile(USERS_FILE, "[]");
ensureFile(TOKENS_FILE, "{}");
ensureFile(path.join(DB_DIR, "settings.json"), "{}");
ensureFile(path.join(DB_DIR, "owner.json"), '["2349017593981"]');
ensureFile(path.join(DB_DIR, "premium.json"), '["2349017593981"]');

// ============ MIDDLEWARE ============
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ============ DB HELPERS ============
const readJSON = (file, fallback) => {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch { return fallback; }
};
const writeJSON = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));
const loadUsers = () => readJSON(USERS_FILE, []);
const saveUsers = (u) => writeJSON(USERS_FILE, u);
const loadTokens = () => readJSON(TOKENS_FILE, {});
const saveTokens = (t) => writeJSON(TOKENS_FILE, t);

function hashPw(password, salt) {
  salt = salt || crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return { hash, salt };
}

function getUserFromToken(token) {
  if (!token) return null;
  const tokens = loadTokens();
  const session = tokens[token];
  if (!session) return null;
  return loadUsers().find((u) => u.id === session.userId) || null;
}

function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const user = getUserFromToken(token);
  if (!user) return res.status(401).json({ success: false, message: "Not authenticated" });
  req.user = user;
  req.token = token;
  next();
}

// ============ AUTH API ============
app.post("/api/signup", (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ success: false, message: "All fields are required" });
  if (username.trim().length < 3)
    return res.status(400).json({ success: false, message: "Username must be at least 3 characters" });
  if (password.length < 6)
    return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return res.status(400).json({ success: false, message: "Invalid email address" });

  const users = loadUsers();
  if (users.find((u) => u.username.toLowerCase() === username.trim().toLowerCase()))
    return res.status(400).json({ success: false, message: "Username already taken" });
  if (users.find((u) => u.email.toLowerCase() === email.trim().toLowerCase()))
    return res.status(400).json({ success: false, message: "Email already registered" });

  const { hash, salt } = hashPw(password);
  const user = {
    id: crypto.randomUUID(), username: username.trim(),
    email: email.trim().toLowerCase(), password: hash, salt,
    createdAt: new Date().toISOString(), plan: "free",
    botLinked: false, botNumber: "",
  };
  users.push(user);
  saveUsers(users);

  const token = crypto.randomBytes(32).toString("hex");
  const tokens = loadTokens();
  tokens[token] = { userId: user.id, ts: Date.now() };
  saveTokens(tokens);

  res.json({
    success: true, message: "Account created!", token,
    user: { id: user.id, username: user.username, email: user.email, plan: user.plan, botLinked: user.botLinked, botNumber: user.botNumber },
  });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ success: false, message: "All fields are required" });

  const users = loadUsers();
  const user = users.find(
    (u) => u.username.toLowerCase() === username.trim().toLowerCase() ||
           u.email.toLowerCase() === username.trim().toLowerCase()
  );
  if (!user) return res.status(401).json({ success: false, message: "Invalid username or password" });

  const { hash } = hashPw(password, user.salt);
  if (hash !== user.password)
    return res.status(401).json({ success: false, message: "Invalid username or password" });

  const token = crypto.randomBytes(32).toString("hex");
  const tokens = loadTokens();
  tokens[token] = { userId: user.id, ts: Date.now() };
  saveTokens(tokens);

  res.json({
    success: true, message: "Login successful!", token,
    user: { id: user.id, username: user.username, email: user.email, plan: user.plan, botLinked: user.botLinked, botNumber: user.botNumber },
  });
});

app.get("/api/me", requireAuth, (req, res) => {
  const u = req.user;
  res.json({ success: true, user: { id: u.id, username: u.username, email: u.email, plan: u.plan, botLinked: u.botLinked, botNumber: u.botNumber } });
});

app.post("/api/logout", (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (token) { const t = loadTokens(); delete t[token]; saveTokens(t); }
  res.json({ success: true });
});

// ============ PAGE ROUTES ============
const sendPage = (name) => (_, res) => res.sendFile(path.join(__dirname, "public", name));
app.get("/", sendPage("index.html"));
app.get("/login", sendPage("login.html"));
app.get("/signup", sendPage("signup.html"));
app.get("/dashboard", sendPage("dashboard.html"));
app.get("/pair", (_, res) => res.redirect("/dashboard"));

// ============ HELPER: sleep ============
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ============ SOCKET.IO — PAIRING (FIXED) ============
io.on("connection", (socket) => {
  console.log(chalk.green("🌐 Client connected:", socket.id));

  socket.on("pair-request", async (data) => {
    const { phoneNumber, token } = data;

    // 1. Validate auth
    const user = getUserFromToken(token);
    if (!user) return socket.emit("pair-error", { message: "Session expired. Please login again." });

    // 2. Clean & validate number
    let clean = (phoneNumber || "").replace(/[^0-9]/g, "");
    if (clean.length < 10) return socket.emit("pair-error", { message: "Invalid phone number. Use country code (e.g. 2349017593981)" });

    console.log(chalk.yellow(`📱 Pair request: ${clean} (user: ${user.username})`));
    socket.emit("pair-status", { message: "Initializing connection..." });

    const sessId = `pair_${clean}_${Date.now()}`;
    const sessPath = path.join(SESSIONS_DIR, sessId);
    let sock = null;
    let pairingDone = false;

    // Cleanup helper
    const cleanup = () => {
      try { if (sock) sock.end(); } catch (_) {}
      try { if (fs.existsSync(sessPath)) fs.rmSync(sessPath, { recursive: true, force: true }); } catch (_) {}
    };

    try {
      // 3. Create fresh session
      const { state, saveCreds } = await useMultiFileAuthState(sessPath);
      const { version } = await fetchLatestBaileysVersion();

      // 4. Create socket — register ALL event listeners BEFORE anything happens
      sock = makeWASocket({
        version,
        auth: {
          creds: state.creds,
          keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" })),
        },
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        browser: Browsers.ubuntu("Chrome"),
        syncFullHistory: false,
        generateHighQualityLinkPreview: false,
      });

      // 5. REGISTER connection.update FIRST (before requesting code)
      sock.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === "open") {
          pairingDone = true;
          console.log(chalk.green(`✅ Paired successfully: ${clean}`));
          socket.emit("pair-success", { message: "Bot paired successfully!" });

          await saveCreds();

          // Update user DB
          const users = loadUsers();
          const u = users.find((x) => x.id === user.id);
          if (u) { u.botLinked = true; u.botNumber = clean; saveUsers(users); }

          // Copy session to permanent folder
          const permPath = path.join(SESSIONS_DIR, `user_${user.id}`);
          if (!fs.existsSync(permPath)) fs.mkdirSync(permPath, { recursive: true });
          try {
            for (const f of fs.readdirSync(sessPath)) {
              fs.copyFileSync(path.join(sessPath, f), path.join(permPath, f));
            }
          } catch (e) { console.error("Session copy error:", e.message); }

          // Start bot
          setTimeout(() => startBot(permPath), 2000);
        }

        if (connection === "close") {
          if (!pairingDone) {
            const statusCode = lastDisconnect?.error?.output?.statusCode;
            const reason = lastDisconnect?.error?.output?.payload?.message || "Connection closed";
            console.log(chalk.red(`❌ Connection closed: ${statusCode} - ${reason}`));

            if (statusCode === DisconnectReason.loggedOut) {
              socket.emit("pair-error", { message: "Logged out by WhatsApp. Try again." });
            } else if (statusCode === 408) {
              socket.emit("pair-error", { message: "Connection timed out. Try again." });
            } else if (statusCode === 401) {
              socket.emit("pair-error", { message: "Unauthorized. The number may not be registered on WhatsApp." });
            } else if (statusCode === 515) {
              socket.emit("pair-error", { message: "WhatsApp server restart. Please try again." });
            }
            cleanup();
          }
        }
      });

      // 6. Save creds whenever updated
      sock.ev.on("creds.update", saveCreds);

      // 7. Wait for Baileys to actually connect to WA servers before requesting code
      socket.emit("pair-status", { message: "Connecting to WhatsApp servers..." });

      // Wait a bit for the WS connection to establish, then request code
      // We use a smarter approach: wait until creds are generated
      await sleep(5000); // Give Baileys 5 seconds to connect

      // Check if connection already closed/failed
      if (pairingDone) return;

      // 8. Request pairing code
      try {
        socket.emit("pair-status", { message: "Generating pairing code..." });
        const code = await sock.requestPairingCode(clean);

        if (code) {
          console.log(chalk.green(`✅ Code generated: ${code}`));
          socket.emit("pair-code", { code: code });
        } else {
          socket.emit("pair-error", { message: "Empty code received. Try again." });
          cleanup();
        }
      } catch (err) {
        console.error(chalk.red("❌ Pairing code error:"), err.message || err);

        let msg = "Failed to generate pairing code.";
        if (err.message?.includes("not registered")) {
          msg = "This number is not registered on WhatsApp.";
        } else if (err.message?.includes("rate")) {
          msg = "Too many attempts. Wait a few minutes and try again.";
        } else if (err.message?.includes("timeout") || err.message?.includes("timed out")) {
          msg = "Connection timed out. Check your server's internet and try again.";
        } else if (err.message?.includes("closed")) {
          msg = "Connection was closed. Please try again.";
        }

        socket.emit("pair-error", { message: msg });
        cleanup();
      }

      // 9. Auto-cleanup after 5 minutes if pairing never completes
      setTimeout(() => {
        if (!pairingDone) {
          console.log(chalk.gray(`⏰ Pair timeout for ${clean}`));
          cleanup();
        }
      }, 5 * 60 * 1000);

    } catch (err) {
      console.error(chalk.red("❌ Fatal pair error:"), err);
      socket.emit("pair-error", { message: "Server error: " + (err.message || "Unknown") });
      cleanup();
    }
  });

  socket.on("disconnect", () => console.log(chalk.gray("🔌 Disconnected:", socket.id)));
});

// ============ BOT ENGINE ============
const activeBots = new Set();

async function startBot(sessPath) {
  if (!fs.existsSync(sessPath)) return;
  if (activeBots.has(sessPath)) return;
  activeBots.add(sessPath);

  try {
    const { state, saveCreds } = await useMultiFileAuthState(sessPath);
    const { version } = await fetchLatestBaileysVersion();

    const stillchasing = makeWASocket({
      version,
      auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" })) },
      logger: pino({ level: "silent" }),
      printQRInTerminal: false,
      browser: Browsers.ubuntu("Chrome"),
      syncFullHistory: false,
    });

    stillchasing.public = true;

    stillchasing.ev.on("connection.update", async (update) => {
      const { connection, lastDisconnect } = update;
      if (connection === "open") {
        console.log(chalk.green.bold(`✅ Bot online: ${stillchasing.user?.id?.split(":")[0] || "?"}`));
      }
      if (connection === "close") {
        activeBots.delete(sessPath);
        const code = lastDisconnect?.error?.output?.statusCode;
        if (code === DisconnectReason.loggedOut) {
          console.log(chalk.red("❌ Bot logged out:", sessPath));
          try { fs.rmSync(sessPath, { recursive: true, force: true }); } catch (_) {}
        } else {
          console.log(chalk.yellow("🔄 Reconnecting bot..."));
          setTimeout(() => startBot(sessPath), 5000);
        }
      }
    });

    stillchasing.ev.on("creds.update", saveCreds);

    stillchasing.ev.on("messages.upsert", async ({ messages, type }) => {
      if (type !== "notify") return;
      for (const msg of messages) {
        if (!msg.message) continue;
        if (msg.key?.remoteJid === "status@broadcast") continue;
        try {
          const m = formatMsg(stillchasing, msg);
          require("./base")(stillchasing, m);
        } catch (e) {
          console.error(chalk.red("Msg error:"), e.message);
        }
      }
    });
  } catch (err) {
    activeBots.delete(sessPath);
    console.error(chalk.red("❌ Bot error:"), err.message);
    setTimeout(() => startBot(sessPath), 5000);
  }
}

// ============ MSG FORMATTER ============
function formatMsg(conn, m) {
  if (!m) return m;
  if (m.key) {
    m.id = m.key.id;
    m.chat = m.key.remoteJid;
    m.fromMe = m.key.fromMe;
    m.isGroup = m.chat?.endsWith("@g.us");
    m.sender = m.fromMe ? conn.user.id.split(":")[0] + "@s.whatsapp.net" : m.key.participant || m.key.remoteJid;
    m.participant = m.key.participant || m.key.remoteJid;
  }
  if (m.message) {
    m.mtype = getContentType(m.message);
    m.msg = m.mtype === "viewOnceMessage"
      ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)]
      : m.message[m.mtype];
    m.body = m.message?.conversation || m.msg?.caption || m.msg?.text ||
      (m.mtype === "buttonsResponseMessage" && m.msg?.selectedButtonId) ||
      (m.mtype === "viewOnceMessage" && m.msg?.caption) || m.text || "";
    m.text = m.body;
    m.quoted = m.msg?.contextInfo?.quotedMessage ? {
      ...m.msg.contextInfo.quotedMessage,
      key: { remoteJid: m.chat, fromMe: false, id: m.msg.contextInfo.stanzaId, participant: m.msg.contextInfo.participant },
      message: m.msg.contextInfo.quotedMessage,
      msg: m.msg.contextInfo.quotedMessage[getContentType(m.msg.contextInfo.quotedMessage)],
      mtype: getContentType(m.msg.contextInfo.quotedMessage),
    } : null;
    m.pushName = m.pushName || "No Name";
  }
  m.reply = (text) => conn.sendMessage(m.chat, { text }, { quoted: m });
  return m;
}

// ============ START SERVER ============
server.listen(PORT, () => {
  console.log(chalk.cyan.bold(`
╔════════════════════════════════════════════╗
║         🌐 OZU CRASHER V2 SERVER          ║
║         http://localhost:${PORT}              ║
╚════════════════════════════════════════════╝
  `));

  // Auto-start existing sessions
  if (fs.existsSync(SESSIONS_DIR)) {
    fs.readdirSync(SESSIONS_DIR)
      .filter((d) => d.startsWith("user_"))
      .forEach((d) => {
        const p = path.join(SESSIONS_DIR, d);
        if (fs.statSync(p).isDirectory()) {
          console.log(chalk.green(`📂 Resuming session: ${d}`));
          startBot(p);
        }
      });
  }
});
