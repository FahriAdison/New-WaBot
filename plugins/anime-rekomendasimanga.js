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
    let res = await fetch(`https://api.jikan.moe/v4/recommendations/manga`);
    if (!res.ok) throw new Error(`Gagal mengambil rekomendasi manga: ${res.statusText}`);
    let json = await res.json();

    // Ambil hanya satu rekomendasi manga
    let recommendation = json.data[0];

    let recommendationInfo = `[ *REKOMENDASI MANGA* ]`;
    recommendationInfo += `\n- *Judul:* ${recommendation.entry[0].title}`;
    
    // Terjemahkan deskripsi ke bahasa Indonesia
    const translatedDescription = await translateText(recommendation.content, 'id');
    recommendationInfo += `\n- *Deskripsi:* ${translatedDescription}`;
    recommendationInfo += `\n  *User:* ${recommendation.user.username}`;

    // Kirim gambar manga
    await conn.sendFile(m.chat, recommendation.entry[0].images.jpg.image_url, '', recommendationInfo, m);
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat mengambil rekomendasi manga...');
  }
}

handler.help = ['rekomendasimanga'];
handler.tags = ['anime'];
handler.command = /^(rekomendasimanga)$/i;

handler.register = true

export default handler;