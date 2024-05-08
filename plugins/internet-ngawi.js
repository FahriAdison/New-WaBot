import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn }) => {
    let res = await googleImage('meme ngawi')
    let image = res.getRandom()
    await conn.sendFile(m.chat, image, null, 'Meme ngawi', m, null)
}
handler.help = ['ngawi', 'jawir', 'hytam']
handler.tags = ['internet']
handler.command = /^(ngawi|hytam|jawir)$/i
handler.limit = true
export default handler
