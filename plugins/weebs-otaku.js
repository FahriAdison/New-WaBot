import { onGoing } from './otakudesu.js';

const handler = async (m, { conn }) => {
  try {
    const onGoingList = await onGoing();
    console.log(onGoingList);
    let ot = '*「 Ongoing Otakudesu 」*';
    for (let i = 0; i < onGoingList.length; i++) {
      ot += `\n\n*Judul :* ${onGoingList[i].judul}\n*Episode :* ${onGoingList[i].eps}\n*Eps berikutnya pada hari :* ${onGoingList[i].hri}\n*Tanggal :* ${onGoingList[i].tgl}\n\n*Image :* ${onGoingList[i].thumb}`;
    }
    /* const buffer = await conn.getFile(m.chat, onGoingList[0].thumb);*/
    conn.sendMessage(m.chat, { image: onGoingList[0].thumb, caption: ot }, { quoted: m });
  } catch (error) {
    console.log(error);
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan', m);
  }
};

handler.help = ['otakuongoing'];
handler.command = /^(otakuongoing)$/i;

handler.register = true

export default handler;
