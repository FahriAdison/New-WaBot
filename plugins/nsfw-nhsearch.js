import nhentai from 'nhentai-node-api'

let handler = async (m, { conn, usedPrefix, text }) => {
	if (!text) return m.reply('Cari apa?')
	await m.reply('Loading...')
	let res = await nhentai.search(text)
	let txt = `*_Reply pesan ini untuk mendownload_*\n`
	txt += `Contoh: ${usedPrefix}getnhentai 1\n\n`
	let nomor = 0
	for (let i of res) {
		txt += `*${nomor += 1}. ${i.title}*\n`
		txt += `ID: ${i.id}\n`
		txt += `Language: ${i.language}\n`
		txt += `─`.repeat(25) + `\n`
	}
	m.reply(txt, null, { contextInfo: { externalAdReply: { title: res[0].title, body: 'Language: ' + res[0].language, thumbnailUrl: res[0].thumbnail, sourceUrl: res[0].thumbnail }}})
}

handler.command = /^nh?(search|entaisearch)$/i
handler.register = true;

export default handler

/* import axios from 'axios'
import { generateWAMessageFromContent } from "@adiwajshing/baileys"


let handler = async (m, { conn, usedPrefix, text }) => {
	if (!text) m.reply('Cari apa?')
	await m.reply('Loading...')
	let res = await axios.get(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=Sad-team&query=${text}`)
	res = res.data.result
	let txt = `*_Reply pesan ini untuk mendownload_*\n`
	txt += `Contoh: ${usedPrefix}getnhentai 1\n\n`
	let nomor = 0
	for (let i of res) {
		txt += `*${nomor += 1}. ${i.title_native}*\n`
		txt += `ID: ${i.id}\n`
		txt += `Watch online: cin.pw/v/${i.id}\n`
		txt += `Upload: ${formatDate(i.date_upload * 1000)}\n`
		txt += `Page: ${i.page}\n`
		txt += `━`.repeat(30) + `\n`
	}
	const prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
orderId: '5352482274766633',
  thumbnail: thumb,
  itemCount: -77777777,
  status: 1,
  surface: 1,
  message: txt,
  orderTitle: 'Tidak tau',
  sellerJid: '436506665652696@s.whatsapp.net',
  token: '1655878716',
  priceAmount: '666000',
  totalAmount1000: '1000000000',
  totalCurrencyCode: 'IDR',
  contextInfo: null,
}}, { quoted: m })
 await conn.relayMessage(m.chat, prep.message,  { messageId: prep.key.id })
}
	
handler.command = /^nh?(search|entaisearch)$/i

export default handler

function formatDate(n, locale = 'id') {
	let d = new Date(n)
	return d.toLocaleDateString(locale, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})
}
*/