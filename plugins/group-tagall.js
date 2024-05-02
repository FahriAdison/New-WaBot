let handler = async (m, { conn, text, participants, isOwner, groupMetadata }) => {
 let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
  m.reply(`Halo Member ${groupMetadata.subject} Group\n\nText: ${text ? `${text}\n\n` : 'Tidak Ada\n\n'}` + users.map(v => '◉ @' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.help = ['tagall']
handler.tags = ['group']
handler.command = /^(tagall)$/i
handler.admin = handler.group = handler.register = true

export default handler