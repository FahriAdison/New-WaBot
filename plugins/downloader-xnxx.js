import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command, }) => {
  try {
	if (!args[0]) throw `Contoh:\n${usedPrefix + command} https://www.xnxx.com/video-131xedbd/junge_leute_gehen_zum_ficken_an_den_strand_hentai/`
   let res = await fetch(global.API('marin', '/api/download/xnxxdl', {
    url: args[0]
  }, 'apikey'))
	let json = await res.json()
	if (json.result?.message) throw json.result.message
	let teks = '⭔ Title : '+json.result.title+'\n⭔ Duration : '+json.result.duration+'s' 
	await m.reply(wait)
	conn.sendMessage(m.chat, { video: { url: json.result.files.high }, caption: teks }, { quoted: m })
    } catch {
m.reply(error)
}
}
handler.help = ['xnxxdl <Url>']
handler.tags = ['downloader']
handler.command = /^(xnxx|xnxxdl)$/i

handler.premium = true;
handler.private = true
handler.register = true;

export default handler
