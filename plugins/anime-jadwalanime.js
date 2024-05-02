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
  try {
    let day = text.trim().toLowerCase()
    let dayEnglish = ''

    switch(day) {
      case 'senin':
        dayEnglish = 'monday'
        break
      case 'selasa':
        dayEnglish = 'tuesday'
        break
      case 'rabu':
        dayEnglish = 'wednesday'
        break
      case 'kamis':
        dayEnglish = 'thursday'
        break
      case 'jumat':
        dayEnglish = 'friday'
        break
      case 'sabtu':
        dayEnglish = 'saturday'
        break
      case 'minggu':
        dayEnglish = 'sunday'
        break
      default:
        throw new Error('Masukkan nama hari yang valid dalam bahasa Indonesia: Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu')
    }

    let res = await fetch(`https://api.jikan.moe/v4/schedules?filter=${dayEnglish}`)
    if (!res.ok) throw new Error(`Gagal mengambil jadwal: ${res.statusText}`)
    let json = await res.json()
    
    let scheduleInfo = `[ *JADWAL ANIME* ]
📅 *Hari:* ${day.toUpperCase()}`
    let lastSynopsis = null;

    // Mendapatkan dan menambahkan informasi untuk setiap anime dalam jadwal
    for (let anime of json.data) {
      scheduleInfo += `\n- *Judul:* ${anime.title}`
      scheduleInfo += `\n- *Rating:* ${anime.rating}`
      scheduleInfo += `\n  *Tipe:* ${anime.type}`
      scheduleInfo += `\n  *Status:* ${anime.status}`
      scheduleInfo += `\n  *Judul Jepang:* ${anime.title_japanese}`
      scheduleInfo += `\n  *Sedang Tayang:* ${anime.airing ? 'Ya' : 'Tidak'}`
      scheduleInfo += `\n  *Rank:* ${anime.rank}`
      scheduleInfo += `\n  *Jumlah Anggota:* ${anime.members}`
      scheduleInfo += `\n  *Popularity:* ${anime.popularity}`
      scheduleInfo += `\n  *Favorites:* ${anime.favorites}`
      // Terjemahkan sinopsis
      const translatedSynopsis = await translateText(anime.synopsis, 'id');
      // Cek apakah ada sinopsis dan apakah harus menambahkan spasi tambahan
      if (anime.synopsis && lastSynopsis !== anime.synopsis) {
        scheduleInfo += `\n  *Sinopsis:* ${translatedSynopsis}`
        lastSynopsis = anime.synopsis;
      }
      scheduleInfo += `\n  *Tahun:* ${anime.year}`
      scheduleInfo += `\n  *Musim:* ${anime.season}`; // Tidak ada spasi tambahan setelah tahun
      // Jika judul baru dimulai, tambahkan spasi tambahan
      if (json.data.indexOf(anime) < json.data.length - 1 && anime.title !== json.data[json.data.indexOf(anime) + 1].title) {
        scheduleInfo += '\n';
      }
    }

    conn.reply(m.chat, scheduleInfo, m)
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan saat mengambil jadwal anime...')
  }
}

handler.help = ['jadwalanime <hari>']
handler.tags = ['anime']
handler.command = /^(jadwalanime)$/i

handler.register = true

export default handler