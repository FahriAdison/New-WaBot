let handler = async (m, { conn, text, command }) => {
    if (!text) throw `Silahkan Masukkan Laporannya`
    if (text.length < 10) throw `Maaf, Teks terlalu Pendek. Minimal 10 Karakter!`
    if (text.length > 1000) throw `Maaf, Teks Terlalu Panjang. Disini Tidak Menerima Sesi Curhat.`
    let idgrup = "120363028313999280" //cukup angka saja
    let teks = `*「 ${command.toUpperCase()} 」*\n\nDari: *@${m.sender.split`@`[0]}*\n\nPesan: ${text}\n`
    conn.reply(`${idgrup}@g.us`, m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_✔️Masalah telah dilaporkan ke Grup_`)
}
handler.help = ['reporttogc'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(reporttogc)$/i
export default handler