import crypto from 'crypto';
import { diffusion } from '@xct007/frieren-scraper';
import { writeFileSync } from 'fs';
import mime from 'mime-types';
import path from 'path';

const handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text) throw `Masukkan teks untuk diubah menjadi gambar\n*Contoh:* ${usedPrefix}${command} 1girl, blush, looking to viewer, warm smile`;
  if (!text.includes(',')) throw `Tolong gunakan prompt dengan benar. Gunakan koma *[ , ]* untuk memisahkan argumen.\n*Contoh:* ${usedPrefix}${command} 1girl, blush, looking to viewer, warm smile`;

  const prompt = text.split(',').join(', ');
  const seed = crypto.randomBytes(9).toString('hex');

  diffusion.stable(prompt, seed).then((Obj) => {
    console.log(Obj);
    const saveFilename = `./tmp.${Obj.ext}`;
    const buffer = Buffer.from(Obj.base64Img, 'base64');
    writeFileSync(saveFilename, buffer);
    conn.sendFile(m.chat, saveFilename, null, `*Result For:* _${prompt}_`, m);
  });
};

handler.help = ['stablediffusion'];
handler.command = ['diffusion', 'stablediffusion', 'dif'];
handler.tags = ['ai'];
handler.private = false;
handler.group = false;
handler.register = true

export default handler;
