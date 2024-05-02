 import axios from 'axios'
let handler = async(m, { conn, args }) => {
if (!args[0]) throw m.reply('Masukan Url Wibesibe Yang Mau Di Screenshot')
let hasil = await ssweb(args[0])
await conn.sendFile(m.chat, hasil, null, 'Here', m)
}
handler.tags = ['tools']
handler.help = ['ssweb']
handler.limit = true
handler.register = true
handler.command = /^(ssweb|ss)$/i
export default handler

async function ssweb(url, full = false, type = 'desktop') {
	type = type.toLowerCase()
	if (!/desktop|tablet|phone/.test(type)) type = 'desktop'
	let form = new URLSearchParams
	form.append('url', url)
	form.append('device', type)
	if (!!full) form.append('full', 'on')
	form.append('cacheLimit', 0)
	let res = await axios.post('https://www.screenshotmachine.com/capture.php', form)
	let buffer = await axios.get(`https://www.screenshotmachine.com/${res.data.link}`, {
		responseType: 'arraybuffer',
		headers: {
			'cookie': res.headers['set-cookie'].join('')
		}
	})
	return Buffer.from(buffer.data)
}