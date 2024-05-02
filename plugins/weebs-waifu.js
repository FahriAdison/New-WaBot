import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
	if (!res.ok) throw await res.text()
	let json = await res.json()
	conn.sendFile(m.chat, json.url, 'image.jpg', `Random Image ${command.capitalize()}`, m)
}
handler.help = handler.alias = ['waifu', 'neko']
handler.tags = ['weebs']
handler.command = /^(waifu|neko)$/i

handler.register = true

export default handler
