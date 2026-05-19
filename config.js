const fs = require('fs');
const chalk = require('chalk');

// ============ BOT CONFIG ============
global.botName = "OZU CRASHER";
global.ownerName = "bad_boi_stillchasing";
global.ownerNumber = "2349017593981";
global.botVersion = "2.0";
global.prefix = ".";
global.prefa = [".", "!", ",", "", "🐤", "🗿"];

// ============ MESSAGES ============
global.mess = {
  owner: "🚫 *ACCESS DENIED*\n\n👑 Only the *Bot Creator or Owners* can use this command",
  group: "❌ This command can only be used in groups!",
  admin: "❌ Admin only command!",
  botAdmin: "❌ Bot must be admin!",
  premium: "💎 Premium only command!",
  wait: "⏳ Please wait..."
};

// ============ NEWSLETTER ============
global.NEWSLETTER_JID = "120363405765816590@newsletter";

// ============ SETTINGS DB ============
const settingsPath = './database/settings.json';

function loadSettings() {
  try {
    if (fs.existsSync(settingsPath)) {
      return JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
    }
  } catch (e) {}
  return {};
}

function saveSettings(data) {
  fs.writeFileSync(settingsPath, JSON.stringify(data, null, 2));
}

global.getSetting = (chatId, key, def = false) => {
  const s = loadSettings();
  return s[chatId]?.[key] ?? def;
};

global.setSetting = (chatId, key, value) => {
  const s = loadSettings();
  if (!s[chatId]) s[chatId] = {};
  s[chatId][key] = value;
  saveSettings(s);
};

console.log(chalk.cyan.bold(`
╔══════════════════════════════════╗
║     OZU CRASHER V2 - CONFIG     ║
║   Owner: ${global.ownerName}    ║
╚══════════════════════════════════╝
`));
