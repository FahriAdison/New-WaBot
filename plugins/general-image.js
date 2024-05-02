import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link, 'google.jpg', `*${htki} ɢᴏᴏɢʟᴇ ɪᴍᴀɢᴇ ${htka}*
*Result:* ${text}
*Source:* Google
`,m)
}
handler.help = handler.alias = ['image']
handler.tags = ['general']
handler.command = /^image$/i
handler.register = true;
handler.limit = true

export default handler
