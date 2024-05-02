let handler = async (m, { conn, usedPrefix, command }) => {
  var ress
  try {
	ress = await axios.request('https://api.waifu.im/search/?included_tags=maid&is_nsfw=false', {
				method: 'GET'
  })
	conn.sendFile(m.chat, ress.data.images[0].url, 'image.jpg', 'Random Image Maid', m)
		} catch (e) {
			throw 'error'
		}
	}
handler.help = handler.alias = ['maid']
handler.tags = ['weebs']
handler.command = /^(maid)$/i

handler.register = true

export default handler