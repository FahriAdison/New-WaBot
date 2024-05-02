let handler = async (m, { conn, text }) => {
  let [t1, t2] = text.split `|`
    let name = conn.getName(m.sender)
 conn.fakeReply(m.chat,'\n'.repeat('500') , '0@s.whatsapp.net',  'Bug tai babi' ,'6283820073017-1627955094@g.us')
}
 
handler.help = ['spam']
handler.tags = ['misc']
handler.command = /^spam$/i

handler.rowner = true

export default handler