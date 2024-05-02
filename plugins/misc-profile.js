 import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'

let handler  = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  var { status, setAt } = await conn.fetchStatus(who).catch(() => {
          return {
            status: "",
            setAt: "",
          };
        });
  let pp = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'
   
  try {
   pp = await this.profilePictureUrl(who, 'image')
  } catch (e) {

  } finally {
    let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let username = conn.getName(who)
    let str = `
• Name: ${username}, \n• Tag: @${who.replace(/@.+/, '')}, ${about ? '\n• Bio: ' + about : ''}, \n• Set At Bio: ${(setAt && moment(setAt).format("DD MMMM YYYY")) || "Unknown"}, \n• Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')},\n• Link: https://wa.me/${who.split`@`[0]}`.trim()

    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpeg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['info']
handler.command = /^(profile)$/i
handler.group = true
handler.register = true;

export default handler

// parel dan kaliph