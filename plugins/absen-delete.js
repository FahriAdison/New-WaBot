let handler = async (m, {
    conn,
    usedPrefix
}) => {
    try {
        let id = m.chat
        conn.absen = conn.absen || {}

        if (!(id in conn.absen)) {
            await conn.reply(m.chat, `_*Tidak ada absen berlangsung di grup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`, m)
        } else {
            delete conn.absen[id]
            m.reply(`Berhasil menghapus absen!`)
        }
    } catch (error) {
        console.error(error)
        m.reply(`Terjadi kesalahan dalam memproses perintah.`)
    }
}

handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
handler.register = true

export default handler