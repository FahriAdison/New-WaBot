// mau ngapain bang ?
// colong silahkan asalkan kasih credit nama kami johannes & papah-chan
// https://github.com/johannes2803
// https://github.com/FahriAdison/
// jangan lupa subs channel papah-chan yo
// jangan di hapus credit nya hargain yg sudah buat susah payah 

import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: 'Papah-Chan',
  address: me ,
  url: 'https://github.com/FahriAdison',
  jpegThumbnail: await conn.resize(marin,300, 300),
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 999,
    isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: '120363272269077450@newsletter',
    newsletterName: '© M a r i n  K i t a g a w a',
    serverMessageId: 143
  }
}
}
},{ quoted: m })

return conn.relayMessage(m.chat, msg.message, {})
}

handler.command = /^loc1$/
handler.owner = true
export default handler