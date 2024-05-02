let handler = async (m, { conn, groupMetadata, participants }) => {
  let link = await conn.groupInviteCode(m.chat)
  let linked = 'https://chat.whatsapp.com/' + link
  conn.reply(m.chat,linked + `\n\nLink Group : ${groupMetadata.subject}`, m)
}

handler.help = ['linkgc', 'linkgroup']
handler.tags = ['group']
handler.command = /^link(gc|group)$/i
handler.register = true;
handler.group = true
handler.admin = true

export default handler
