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

let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan Nama Anime!\nContoh: #anime One Piece`
  try {
    let params = {
      q: `"${text}"` // Menambahkan tanda kutip untuk pencarian teks
    }

    let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&')
    let res = await fetch(`https://api.jikan.moe/v4/anime?${queryString}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    
    if (!json.data || json.data.length === 0) {
      throw 'Anime tidak ditemukan... :('
    }

    let { title, synopsis, duration, type, score, episodes, rank, popularity, members, favorites, url, images } = json.data[0];
    // Terjemahkan synopsis ke bahasa Indonesia
    synopsis = await translateText(synopsis, 'id');
    
    let imageUrl = images.jpg.image_url; // URL gambar anime
    let animeInfo = `[ *ANIME INFO* ]
🔑 *Title:* ${title}
📖 *Synopsis:* ${synopsis}
⏲️ *Duration:* ${duration}
📺 *Type:* ${type}
⭐ *Score:* ${score}
📼 *Episodes:* ${episodes}
🏅 *Rank:* ${rank}
🔥 *Popularity:* ${popularity}
👥 *Members:* ${members}
❤️ *Favorites:* ${favorites}
🔗 *Link:* ${url}`;

    // Kirim gambar anime bersama dengan info
    conn.sendFile(m.chat, imageUrl, 'anime.jpg', animeInfo, m);
  } catch (error) {
    console.error(error);
    m.reply('Tidak Ditemukan... :(\nMungkin Coba kata kunci lain?');
  }
}

handler.help = ['anime <nama>'];
handler.tags = ['anime'];
handler.limit = true;
handler.register = true
handler.command = /^(anime)$/i;

export default handler;