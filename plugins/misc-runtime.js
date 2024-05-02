const { generateWAMessageFromContent } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let thumbnail = 'https://telegra.ph/file/d0856abd4a9a523e11e55.jpg'
    let img = await(await fetch(thumbnail)).buffer()
    let muptime = clockString(_muptime)
    let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: -99999999, status: 500,
surface: 999,
message: `Bot Aktif Selama\n${muptime}`,
description: me,
orderTitle: 'n',
token: '9',
curreyCode: 'JPY',
totalCurrencyCode: '9999999',
totalAmount1000: '1000000',
sellerJid: '855387895949@s.whatsapp.net',
thumbnail: img,
}}, {contextInfo: null, quoted: m})
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })
}


handler.command = /^(up|run)time$/i
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Days ', h, ' Hours ', m, ' Minute ', s, ' Second '].map(v => v.toString().padStart(2, 0)).join('')
}