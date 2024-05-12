import fs from 'fs'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.game = conn.game ? conn.game: {}
    let id = 'tebakgambar-' + m.chat
    if (id in conn.game) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.game[id][0])
    let src = JSON.parse(fs.readFileSync('./json/tebakgambar.json', 'utf-8'))
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.deskripsi}

🕑Timeout *${(timeout / 1000).toFixed(2)} detik*

💥Bonus: ${poin} XP
Ketik ${usedPrefix}hgamb untuk bantuan
`.trim()
    conn.game[id] = [
        await conn.sendMessage(m.chat, { image: { url: json.img }, fileName: 'tebakgambar.jpg', mimetype: 'image/jpeg', caption: caption }, { quoted: m }),
        json, poin,
        setTimeout(() => {
            if (conn.game[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.game[id][0])
            delete conn.game[id]
        }, timeout)
    ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar$/i

handler.onlyprem = false
handler.game = true
handler.group = true
handler.register = true

export default handler
