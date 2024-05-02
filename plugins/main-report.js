let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Silahkan Masuk Laporanya`
    if (text.length < 10) throw `Maaf Teks terlalu Pendek, Minimal 10 Karakter!`
    if (text.length > 1000) throw `Maaf Teks Terlalu Panjang, Disini Tidak Menerima Sesi Curhat`
    let teks = `*「 ${command.toUpperCase()} 」*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.ownerbot + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_✔️Masalah telah di laporkan ke Owner Bot, Jika ${command.toLowerCase()} laporan palsu/main2 tidak akan ditanggapi!`)
}
handler.help = ['report', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
export default handler

/* let handler = async(m, { conn, text }) => {
    if (!text) throw 'Silahkan masukkan laporan'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
    const laporan = `*「 REPORT 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '62895612153565@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️Masalah telah di laporkan ke Owner Bot, laporan palsu/main2 tidak akan ditanggapi!')
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

export default handler
*/