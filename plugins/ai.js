import fetch from 'node-fetch';

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `;

  try {
   // await m.reply(wait); // Anda perlu mendefinisikan "wait" sebelumnya jika belum
    const apii = await fetch(`https://aemt.me/openai?text=${text}`);
    const res = await apii.json();
    await m.reply(res.result);
  } catch (err) {
    console.error(err);
    throw "Terjadi kesalahan dalam menjawab pertanyaan";
  }
};

handler.command = handler.help = ['ai'];
handler.tags = ['ai'];
handler.premium = false;
handler.register = true

export default handler;
