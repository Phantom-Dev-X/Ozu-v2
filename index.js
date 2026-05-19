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
const io = new Server(server);
const PORT = process.env.PORT || 3000;

// ============ DB PATHS ============
const DB_DIR = path.join(__dirname, "database");
const SESSIONS_DIR = path.join(__dirname, "sessions");
const USERS_FILE = path.join(DB_DIR, "users.json");
const TOKENS_FILE = path.join(DB_DIR, "sessions_map.json");

// Ensure directories exist on startup
[DB_DIR, SESSIONS_DIR].forEach((d) => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});
// Ensure DB files exist
[USERS_FILE, TOKENS_FILE].forEach((f) => {
  if (!fs.existsSync(f)) fs.writeFileSync(f, f.endsWith("users.json") ? "[]" : "{}");
});
if (!fs.existsSync(path.join(DB_DIR, "settings.json")))
  fs.writeFileSync(path.join(DB_DIR, "settings.json"), "{}");
if (!fs.existsSync(path.join(DB_DIR, "owner.json")))
  fs.writeFileSync(path.join(DB_DIR, "owner.json"), '["2349017593981"]');
if (!fs.existsSync(path.join(DB_DIR, "premium.json")))
  fs.writeFileSync(path.join(DB_DIR, "premium.json"), '["2349017593981"]');

// ============ MIDDLEWARE ============
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ============ DB HELPERS ============
const readJSON = (file, fallback) => {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); }
  catch { return fallback; }
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
  const users = loadUsers();
  return users.find((u) => u.id === session.userId) || null;
}

// ============ AUTH MIDDLEWARE ============
function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const user = getUserFromToken(token);
  if (!user) return res.status(401).json({ success: false, message: "Not authenticated" });
  req.user = user;
  req.token = token;
  next();
}

// ============ AUTH API ============

// POST /api/signup
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
    id: crypto.randomUUID(),
    username: username.trim(),
    email: email.trim().toLowerCase(),
    password: hash,
    salt,
    createdAt: new Date().toISOString(),
    plan: "free",
    botLinked: false,
    botNumber: "",
  };
  users.push(user);
  saveUsers(users);

  const token = crypto.randomBytes(32).toString("hex");
  const tokens = loadTokens();
  tokens[token] = { userId: user.id, ts: Date.now() };
  saveTokens(tokens);

  res.json({
    success: true,
    message: "Account created!",
    token,
    user: { id: user.id, username: user.username, email: user.email, plan: user.plan, botLinked: user.botLinked, botNumber: user.botNumber },
  });
});

// POST /api/login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ success: false, message: "All fields are required" });

  const users = loadUsers();
  const user = users.find(
    (u) =>
      u.username.toLowerCase() === username.trim().toLowerCase() ||
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
    success: true,
    message: "Login successful!",
    token,
    user: { id: user.id, username: user.username, email: user.email, plan: user.plan, botLinked: user.botLinked, botNumber: user.botNumber },
  });
});

// GET /api/me
app.get("/api/me", requireAuth, (req, res) => {
  const u = req.user;
  res.json({
    success: true,
    user: { id: u.id, username: u.username, email: u.email, plan: u.plan, botLinked: u.botLinked, botNumber: u.botNumber },
  });
});

// POST /api/logout
app.post("/api/logout", (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (token) {
    const tokens = loadTokens();
    delete tokens[token];
    saveTokens(tokens);
  }
  res.json({ success: true });
});

// ============ PAGE ROUTES ============
const sendPage = (name) => (_, res) => res.sendFile(path.join(__dirname, "public", name));
app.get("/", sendPage("index.html"));
app.get("/login", sendPage("login.html"));
app.get("/signup", sendPage("signup.html"));
app.get("/dashboard", sendPage("dashboard.html"));
app.get("/pair", (_, res) => res.redirect("/dashboard"));

// ============ SOCKET.IO — PAIRING ============
io.on("connection", (socket) => {
  console.log(chalk.green("🌐 Client connected:", socket.id));

  socket.on("pair-request", async (data) => {
    const { phoneNumber, token } = data;

    const user = getUserFromToken(token);
    if (!user) return socket.emit("pair-error", { message: "Session expired. Please login again." });

    const clean = (phoneNumber || "").replace(/[^0-9]/g, "");
    if (clean.length < 10) return socket.emit("pair-error", { message: "Invalid phone number." });

    console.log(chalk.yellow(`📱 Pair request: ${clean} (user: ${user.username})`));

    let sock;
    const sessId = `pair_${clean}_${Date.now()}`;
    const sessPath = path.join(SESSIONS_DIR, sessId);

    try {
      const { state, saveCreds } = await useMultiFileAuthState(sessPath);
      const { version } = await fetchLatestBaileysVersion();

      sock = makeWASocket({
        version,
        auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" })) },
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        browser: Browsers.ubuntu("Chrome"),
      });

      socket.emit("pair-status", { message: "Connecting to WhatsApp servers..." });

      // Request pairing code after socket is ready
      setTimeout(async () => {
        try {
          const code = await sock.requestPairingCode(clean);
          console.log(chalk.green(`✅ Code: ${code}`));
          socket.emit("pair-code", { code });
        } catch (err) {
          console.error(chalk.red("❌ Code error:"), err.message);
          socket.emit("pair-error", { message: "Failed to generate code. Try again." });
          try { sock.end(); } catch (_) {}
          try { fs.rmSync(sessPath, { recursive: true, force: true }); } catch (_) {}
        }
      }, 3000);

      sock.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === "open") {
          console.log(chalk.green(`✅ Paired: ${clean}`));
          socket.emit("pair-success", { message: "Bot paired successfully!" });
          await saveCreds();

          // Save to user record
          const users = loadUsers();
          const u = users.find((x) => x.id === user.id);
          if (u) { u.botLinked = true; u.botNumber = clean; saveUsers(users); }

          // Copy session to permanent user folder
          const permPath = path.join(SESSIONS_DIR, `user_${user.id}`);
          if (!fs.existsSync(permPath)) fs.mkdirSync(permPath, { recursive: true });
          for (const f of fs.readdirSync(sessPath)) {
            fs.copyFileSync(path.join(sessPath, f), path.join(permPath, f));
          }

          // Start the bot
          setTimeout(() => startBot(permPath), 2000);
        }

        if (connection === "close") {
          const code = lastDisconnect?.error?.output?.statusCode;
          if (code === DisconnectReason.loggedOut) {
            socket.emit("pair-error", { message: "Logged out. Try again." });
            try { fs.rmSync(sessPath, { recursive: true, force: true }); } catch (_) {}
          }
        }
      });

      sock.ev.on("creds.update", saveCreds);
    } catch (err) {
      console.error(chalk.red("❌ Pair error:"), err);
      socket.emit("pair-error", { message: "Server error. Try again." });
    }
  });

  socket.on("disconnect", () => console.log(chalk.gray("🔌 Disconnected:", socket.id)));
});

// ============ BOT ============
const activeBots = new Set();

async function startBot(sessPath) {
  if (!fs.existsSync(sessPath)) return;
  if (activeBots.has(sessPath)) return; // prevent duplicate
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
          console.log(chalk.yellow("🔄 Reconnecting..."));
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
    m.sender = m.fromMe
      ? conn.user.id.split(":")[0] + "@s.whatsapp.net"
      : m.key.participant || m.key.remoteJid;
    m.participant = m.key.participant || m.key.remoteJid;
  }
  if (m.message) {
    m.mtype = getContentType(m.message);
    m.msg =
      m.mtype === "viewOnceMessage"
        ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)]
        : m.message[m.mtype];
    m.body =
      m.message?.conversation ||
      m.msg?.caption ||
      m.msg?.text ||
      (m.mtype === "buttonsResponseMessage" && m.msg?.selectedButtonId) ||
      (m.mtype === "viewOnceMessage" && m.msg?.caption) ||
      m.text || "";
    m.text = m.body;
    m.quoted = m.msg?.contextInfo?.quotedMessage
      ? {
          ...m.msg.contextInfo.quotedMessage,
          key: { remoteJid: m.chat, fromMe: false, id: m.msg.contextInfo.stanzaId, participant: m.msg.contextInfo.participant },
          message: m.msg.contextInfo.quotedMessage,
          msg: m.msg.contextInfo.quotedMessage[getContentType(m.msg.contextInfo.quotedMessage)],
          mtype: getContentType(m.msg.contextInfo.quotedMessage),
        }
      : null;
    m.pushName = m.pushName || "No Name";
  }
  m.reply = (text) => conn.sendMessage(m.chat, { text }, { quoted: m });
  return m;
}

// ============ START ============
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
