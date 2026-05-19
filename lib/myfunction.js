const axios = require('axios');
const fetch = require('node-fetch');
const fs = require('fs');

// ============ SIMPLE MESSAGE HELPER ============
const smsg = (conn, m, store) => {
  if (!m) return m;
  let M = proto.WebMessageInfo;
  if (m.key) {
    m.id = m.key.id;
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    m.chat = m.key.remoteJid;
    m.fromMe = m.key.fromMe;
    m.isGroup = m.chat.endsWith("@g.us");
    m.sender = m.fromMe
      ? conn.user.id.split(":")[0] + "@s.whatsapp.net" || conn.user.id
      : m.key.participant || m.key.remoteJid;
  }
  return m;
};

// ============ RUNTIME ============
function runtime(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " Day " : " Days ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " Hour " : " Hours ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " Minute " : " Minutes ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " Second" : " Seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

// ============ FORMAT SIZE ============
function formatSize(bytes) {
  if (bytes >= 1073741824) return (bytes / 1073741824).toFixed(2) + " GB";
  else if (bytes >= 1048576) return (bytes / 1048576).toFixed(2) + " MB";
  else if (bytes >= 1024) return (bytes / 1024).toFixed(2) + " KB";
  else if (bytes > 1) return bytes + " bytes";
  else if (bytes == 1) return bytes + " byte";
  else return "0 bytes";
}

// ============ IS URL ============
function isUrl(str) {
  return str.match(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
      "gi"
    )
  );
}

// ============ GET BUFFER ============
async function getBuffer(url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "get",
      url,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (e) {
    console.log(`Error : ${e}`);
  }
}

// ============ FETCH JSON ============
async function fetchJson(url, options) {
  try {
    options ? options : {};
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      ...options,
    });
    return res.json();
  } catch (error) {
    return error;
  }
}

// ============ GET TIME ============
function getTime(format, date) {
  if (date) {
    return require("moment-timezone")(date)
      .tz("Africa/Lagos")
      .locale("en")
      .format(format);
  } else {
    return require("moment-timezone")()
      .tz("Africa/Lagos")
      .locale("en")
      .format(format);
  }
}

// ============ GENERATE TAG ============
function generateMessageTag(epoch) {
  let tag = Date.now().toString();
  if (epoch) tag += ".--" + epoch;
  return tag;
}

// ============ GET RANDOM ============
function getRandom(ext) {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
}

// ============ GET SIZE MEDIA ============
function getSizeMedia(path) {
  return new Promise((resolve, reject) => {
    if (/http/.test(path)) {
      axios.get(path).then((res) => {
        let length = parseInt(res.headers["content-length"]);
        let size = formatSize(length);
        if (!isNaN(length)) resolve(size);
      });
    } else if (Buffer.isBuffer(path)) {
      let length = Buffer.byteLength(path);
      let size = formatSize(length);
      if (!isNaN(length)) resolve(size);
    } else {
      reject("error");
    }
  });
}

// ============ FORMAT P ============
function formatp(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ============ SEND GMAIL (placeholder) ============
function sendGmail() {
  return "Not implemented";
}

module.exports = {
  smsg,
  sendGmail,
  formatSize,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  runtime,
  fetchJson,
  formatp,
  getTime,
  getRandom,
};
