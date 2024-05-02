let handler = async (m, { conn, command, usedPrefix }) => {
	let q = m.quoted
	try {
		if (q && /sticker/.test(q.mtype)) {
			if (q.isAnimated) return m.reply(`well failed\nUes *${usedPrefix}tomp4* for moving stickers`)
			let img = await m.quoted.download()
             await conn.sendMessage(m.chat,{ image: img,caption: `*✅ Here you have*`},{quoted: m })
		} else return m.reply('Reply / tag Sticker')
	} catch (e) {
		console.log(e)
	}
}

handler.help = ['toimg']
handler.tags = ['convert']
handler.command = /^(toim(g|age))$/i
handler.register = true;

export default handler
