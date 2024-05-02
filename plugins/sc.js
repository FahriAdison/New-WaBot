import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import fetch from 'node-fetch'


let handler = async (m, {
    conn,
    args
}) => {
    let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: 'KLIK DISINI',
  address: `Nyari Sc Bang? Tuh Di Atas`,
  url: 'https://github.com/FahriAdison/New-WaBot',
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
handler.command = /^sc(ript(bot)?|bot)?$/i
export default handler