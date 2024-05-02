import axios from 'axios';

const defaultLang = 'id';
const apiKey = '08a134b000ccc8017863efc0160ff934'; // API key untuk layanan TTS

const handler = async (m, { conn, usedPrefix, command }) => {
    let text = [
        'Mungkin suatu hari',
        'Tidak juga',
        'Tidak keduanya',
        'Kurasa tidak',
        'Ya',
        'Coba tanya lagi',
        'Tidak ada'
    ].getRandom();
    
    try {
        // Mengonversi teks menjadi suara menggunakan API TTS
        const audioData = await tts(text, defaultLang);
        
        // Mengirim suara ke obrolan
        await conn.sendFile(m.chat, audioData, 'tts.mp3', null, m, true);
    } catch (error) {
        console.error(error);
        throw "Gagal mengonversi teks menjadi suara";
    }
};

handler.help = ['kerang', 'kerangajaib'].map(v => v + ' <teks>');
handler.tags = ['fun'];
handler.command = /^(kulit)?kerang(ajaib)?$/i;

handler.register = true;

export default handler;

// Fungsi untuk melakukan TTS menggunakan layanan eksternal
async function tts(text, lang = 'id') {
    try {
        const response = await axios.post('https://api.elevenlabs.io/v1/text-to-speech/CYw3kZ02Hs0563khs1Fj', {
            text,
            model_id: 'eleven_multilingual_v2',
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.5
            }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'xi-api-key': apiKey
            },
            responseType: 'arraybuffer' // Menetapkan responseType ke 'arraybuffer' untuk mendapatkan respons sebagai array buffer
        });

        // Mengembalikan data suara sebagai buffer
        return Buffer.from(response.data);
    } catch (error) {
        console.error(error);
        throw "Terjadi kesalahan dalam mengonversi teks menjadi suara";
    }
}