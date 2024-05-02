import fetch from 'node-fetch';

// Fungsi untuk menerjemahkan teks menggunakan Google Translate API
const translateText = async (text, targetLanguage) => {
  try {
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURI(text)}`);
    const json = await res.json();
    return json[0][0][0]; // Ambil hasil terjemahan dari respons JSON
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // Kembalikan teks asli jika terjadi kesalahan
  }
};

let handler = async(m, { conn }) => {
  try {
    let res = await fetch(`https://api.jikan.moe/v4/recommendations/anime`);
    if (!res.ok) throw new Error(`Gagal mengambil rekomendasi anime: ${res.statusText}`);
    let json = await res.json();

    let recommendationInfo = `[ *REKOMENDASI ANIME* ]`;

    for (let recommendation of json.data) {
      recommendationInfo += `\n- *Judul:* ${recommendation.entry[0].title}`;
      // Terjemahkan deskripsi ke bahasa Indonesia
      const translatedDescription = await translateText(recommendation.content, 'id');
      recommendationInfo += `\n- *Deskripsi:* ${translatedDescription}`;
      recommendationInfo += `\n  *Tanggal:* ${new Date(recommendation.date).toLocaleDateString('id-ID')}`;
      recommendationInfo += `\n  *User:* ${recommendation.user.username}`;
      recommendationInfo += '\n';
    }

    conn.reply(m.chat, recommendationInfo, m);
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat mengambil rekomendasi anime...');
  }
}

handler.help = ['rekomendasianime'];
handler.tags = ['anime'];
handler.command = /^(rekomendasianime)$/i;

handler.register = true

export default handler;