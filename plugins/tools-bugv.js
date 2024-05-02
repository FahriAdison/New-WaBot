import fetch from "node-fetch"


let handler = async (m, { conn, args, command, usedPrefix }) => {

  let pp = 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  }
  
	if (!args[0]) return m.reply(`Reply video dengan command /${command} 200`)
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/video/.test(mime)) {
		let vid = await q.download()
		m.reply('Loading')
		await conn.sendMessage(m.chat, { video: vid,  seconds: args[0] || -1 }, { quoted: m })
	} else throw 'Reply videonya!'
}
handler.help = ['bugv', 'bugvideo']
handler.tags = ['tools']
handler.command = /^bug(v|video)$/i
handler.owner = false
handler.register = true

export default handler