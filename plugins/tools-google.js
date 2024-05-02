import fetch from 'node-fetch';
import googleIt from 'google-it';

const handler = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command);
  let text = args.join` `;
  if (!text) return conn.reply(m.chat, 'Tidak ada teks untuk di cari', m);
  let url = 'https://google.com/search?q=' + encodeURIComponent(text);
  let search = await googleIt({ query: text });
  let msg = search.map(({ title, link, snippet }) => {
    return `» *Title* : *${title}*\n» *Description* : _${snippet}_\n» *Link* : _${link}_`;
  }).join`\n\n────────────────────────\n\n`;
  try {
    var logos = 'https://telegra.ph/file/cf62f2b8648a352548978.jpg';
    conn.sendFile(m.chat, logos, 'logos.jpg', url + '\n\n' + msg, m);
  } catch (e) {
    m.reply(msg);
  }
};

handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>');
handler.tags = ['internet'];
handler.command = /^googlef?$/i;
handler.register = true
handler.fail = null;

export default handler;
