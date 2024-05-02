import { readFileSync } from 'fs';

let handler = async (m, { conn, isROwner, usedPrefix, command, text }) => {
  if (!isROwner) {
    return; // Batasi hanya untuk owner
  }

  if (!text) {
    throw `uhm.. teksnya mana?\n\ncontoh: ${usedPrefix + command} main`;
  }

  m.reply('Executing...');

  try {
    let plug = await fs.readFileSync(`./plugins/${text}.js`)
    return await conn.sendMessage(m.chat, { document: plug, mimetype: 'application/javascript', fileName: text + '.js' }, { quoted: m })
  } catch (e) {
    m.reply('File tidak ditemukan atau ada kesalahan.');
  }
};

handler.help = ['getfile'].map(v => v + ' <text>');
handler.tags = ['owner'];
handler.command = /^(getfile|gf)$/i;
handler.rowner = true;

export default handler;
