const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let hapus = m.key.participant
    let name = this.getName(m.sender)
    let pesan = m.key.id
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if  (m.text.includes(linkThisGroup)) return m.reply ('Kamu Tidak Akan Di Kick,Karena Ini Adalah Link Group Ini Sendiri')
        }
        await conn.reply(m.chat, `*「 ANTILINK DETECTOR 」*\nLink Gorup Terdeteksi ${name} kamu akan di kick di group ini`, m)
          await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: pesan, participant: hapus }})
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    return !0
}