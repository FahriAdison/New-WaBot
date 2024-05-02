import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

const pre = generateWAMessageFromContent(m.chat, { liveLocationMessage: { 
degreesLatitude: 35.685506276233525, 
degreesLongitude: 139.75270667105852,
caption: me,
sequenceNumber: 1656662972682001, 
jpegThumbnail: null
}}, { quoted: m})

return conn.relayMessage(m.chat, pre.message, { messageId: pre.key.id })
}

handler.command = /^loc2$/
handler.owner = true
export default handler