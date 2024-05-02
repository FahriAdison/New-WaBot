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
  if (!text) throw `Masukkan Nama Characternya!\nContoh: #chara Rimuru`
  try {
    let params = {
      q: `"${text}"` // Menambahkan tanda kutip untuk pencarian teks
    }

    let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&')
    let res = await fetch(`https://api.jikan.moe/v4/characters?${queryString}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    
    if (!json.data || json.data.length === 0) {
      throw 'Karakter tidak ditemukan... :('
    }

    let { name, about, name_kanji, url, images, mal_id } = json.data[0];
    // Terjemahkan about ke bahasa Indonesia
    about = await translateText(about, 'id');
    
    let imageUrl = images.jpg.image_url; // URL gambar karakter
    let charaInfo = `[ *CHARACTER INFO* ]
🔑 *Id Character:* ${mal_id}
💬 *Name:* ${name}
💭 *Nickname:* ${name_kanji}
📖 *About* : ${about}
🔗 *Link Watch:* ${url}`;

    // Kirim gambar karakter bersama dengan info
    conn.sendFile(m.chat, imageUrl, 'character.jpg', charaInfo, m);
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat mencari karakter...');
  }
}

handler.help = ['character <nama>'];
handler.tags = ['anime'];
handler.command = /^(character)$/i;

handler.register = true

export default handler;