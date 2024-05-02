import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import jimp from 'jimp'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, usedPrefix: _p }) => {

  let userno = `@${m.sender.split('@')[0]}`
  let owner = `6285767373425@s.whatsapp.net`
    let soun = ["aku-ngakak",
        "anjay",
        "ara-ara2",
        "ara-ara-cowok",
        "ara-ara",
        "arigatou",
        "assalamualaikum",
        "asu",
        "ayank",
        "bacot",
        "bahagia-aku",
        "baka",
        "bansos",
        "beat-box2",
        "beat-box",
        "biasalah",
        "bidadari",
        "bot",
        "buka-pintu",
        "canda-anjing",
        "cepetan",
        "china",
        "cuekin-terus",
        "daisuki-dayo",
        "daisuki",
        "dengan-mu",
        "Donasiku",
        "gaboleh-gitu",
        "gak-lucu",
        "gamau",
        "gay",
        "gelay",
        "gitar",
        "gomenasai",
        "hai-bot",
        "hampa",
        "hayo",
        "hp-iphone",
        "ih-wibu",
        "i-like-you",
        "india",
        "karna-lo-wibu",
        "kiss",
        "kontol",
        "ku-coba",
        "maju-wibu",
        "makasih",
        "mastah",
        "menuasli",
        "menuku",
        "menu",
        "MenuYuki",
        "nande-nande",
        "nani",
        "ngadi-ngadi",
        "nikah",
        "nuina",
        "onichan",
        "ownerku",
        "owner-sange",
        "pak-sapardi",
        "pale",
        "pantek",
        "pasi-pasi",
        "punten",
        "sayang",
        "siapa-sih",
        "sudah-biasa",
        "summertime",
        "tanya-bapak-lu",
        "to-the-bone",
        "wajib",
        "waku",
        "woi",
        "yamete",
        "yowaimo",
        "yoyowaimo"
    ].getRandom()
    let vn = "https://raw.githubusercontent.com/AyGemuy/HAORI-API/main/audio/" + soun + ".mp3"

  let res = await fetch('https://raw.githubusercontent.com/FahriAdison/Hoshino-Image/main/image/hoshino.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    // data user
   let user = db.data.users[m.sender]
        let users = Object.entries(db.data.users).map(([key, value]) => {
                return { ...value, jid: key }
        })
    let money = db.data.users[m.sender].money
    let limit = global.db.data.users[m.sender].limit
        let { min, xp, max } = xpRange(user.level, global.multiplier)
let tags = {}
const defaultMenu = {
  before: `
Hi, ${userno} 👋

👤 *\`INFO USER\`*
» Name: %name
» Limit: ${limit}
» Level: ${user.level}
» Money: ${money}
${str}

🤖 *\`INFO BOT\`*
» Name Bot: ${namebot}
» Date: %date
» Time: %time WIB
» Runtime: %uptime
» Database: %totalreg
${str}
\n%readmore
${htki} LIST MENU ${htka}\n\n`,
  header: '`%category` 🚥',
  body: '> 々 _%cmd%islimit%isPremium_ ',
  footer: '',
  after: 'jika ada error segera hubungi owner',
}
  try {
    let name = m.pushName || conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta'
    })
    let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Jakarta' })
    time = time.replace(/[.]/g, ':')
    let _uptime
    if (process.send) {
      process.send('uptime')
      _uptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let totalreg = Object.keys(global.db.data.users).length
    let uptime = clockString(_uptime)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '<Limit>' : '')
                .replace(/%isPremium/g, menu.premium ? '<Premium>' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      me: conn.getName(conn.user.jid),
      name, date, time, totalreg, _p,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

const vi = ['https://telegra.ph/file/067b2cb3312837533239c.mp4',
'https://telegra.ph/file/e38881701692c74484a17.mp4',
'https://telegra.ph/file/de776d34ef058b7d2ec12.mp4', 'https://telegra.ph/file/bc82653506c301b40679c.mp4',     'https://telegra.ph/file/7f10b3624991bbcee9ded.mp4', 'https://telegra.ph/file/51aa9701839dcc29066e9.mp4',     'https://telegra.ph/file/4f26132ac0296a34a45a8.mp4']

var vid = vi[Math.floor(Math.random() * (vi.length))]

                         let hi = `\n\n\t\t Have a good day ${name} \t\t\n\n`

    const totag = { contextInfo: { mentionedJid: [text] }}

    let mtag = text + totag
    // const pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => './src/avatar_contact.png')
    // if (m.isGroup) return conn.sendButton(m.chat, text.trim(), conn.getName(conn.user.jid), pp, [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']], m)
    // conn.sendHydrated(m.chat, text.trim(), conn.getName(conn.user.jid), pp, null, null, null, null, [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']])
   // conn.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/c82d5c358495e8ef15916.mp4' }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: text.trim(), footer: await conn.getName(conn.user.jid) , templateButtons: [{ quickReplyButton: { displayText: 'Speedtest', id: `${_p}ping` }}, { quickReplyButton: { displayText: 'Owner', id: `${_p}owner` }} ] })
     /*
conn.sendButton(m.chat, text.trim(), conn.user.name, await genProfile(conn, m), [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']], m)
*/

let ppl = await( await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))

    let ppb = await( await conn.profilePictureUrl(conn.user.jid, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))
    
//Jejak
 /*
conn.sendButton(m.chat, hi, text.trim(), await( await conn.getFile(ppb)).data, [['OWNER', '-owner']], false, { quoted: m, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: 'https://youtu.be/Nq3x1AkwgpY',
title: time,
body: me,
sourceUrl: 'http://s.id/0x404', thumbnail: await( await conn.getFile(ppl)).data
*/
    
    // await m.reply('_Ｌｏａｄｉｎｇ．．．_')
// Gif button
 /* conn.sendMessage(m.chat, { video: { url: vid }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: text.trim(), footer: conn.getName('6283820073017@s.whatsapp.net') ,templateButtons: [ { quickReplyButton: { displayText: 'Owner', id: `${_p}owner` }}, { urlButton: { displayText: '𝙎𝘾', url: 'http://github.com/Rlxfly/re-md'} }]})
*/


 /* const pre = generateWAMessageFromContent(m.chat, { liveLocationMessage:{
  degreesLatitude: 35.685506276233525,
  degreesLongitude: 139.75270667105852,
  accuracyInMeters: 100,
  speedInMps: 999,
  degreesClockwiseFromMagneticNorth: 99,
  caption: text.trim(),
  sequenceNumber: 774236889,
  timeOffset: 86000,
  jpegThumbnail: thumb,
  contextInfo: { mentionedJid: [m.sender] }
}}, { quoted: m
					})

return conn.relayMessage(m.chat, pre.message, { messageId: pre.key.id })

conn.sendMessageModify(m.chat, text.trim(), m, {
title: me,
ads: true, 
largeThumb: true,
thumbnail: await(await fetch(ppl)).buffer()
})
*/
 await conn.sendMessage(m.chat, {
                      video: { url: 'https://telegra.ph/file/a481b43032eba628ffbeb.mp4' },
                      caption: text.trim(),
                      gifPlayback: true,
                      gifAttribution: Math.floor(Math.random() * 2) + 1,
                      fileLength: "99999999999999",
                      contextInfo: {
                          mentionedJid: [m.sender, ownerbot], 
                          forwardingScore: 999,
				          isForwarded: true,
                          externalAdReply: {
                              showAdAttribution: false,
                              title: 'Marin Kitagawa',
                              body: `Bot Created By ${namaowner}`,
                              description: 'P',
                              thumbnail: await(await fetch(ppl)).buffer(),
                              sourceUrl: 'https://chat.whatsapp.com/JFzipOMAz155jOldBdqUZy',
                              previewType: "PHOTO",
                              mediaType: 1,
                              renderLargerThumbnail: false,
                          },
                           forwardedNewsletterMessageInfo: {
                              newsletterJid: '120363272269077450@newsletter',
                              newsletterName: '© M a r i n  K i t a g a w a',
                              serverMessageId: 143
                          }
                      }
                  }, {
                      quoted: m
                  })
      conn.sendFile(m.chat, vn, 'sound.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
  } catch (e) {
    m.reply('An error occurred')
    m.reply(e)
  }
}
handler.help = ['allmenu']
handler.tags = ['general']
handler.alias = ['allmenu']
handler.command = /^(allmenu)$/i
handler.exp = 3
handler.register = true;

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}