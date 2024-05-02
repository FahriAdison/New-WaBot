import fetch from 'node-fetch';
import axios from 'axios';

const handler = async (m, { usedPrefix, command, text }) => {
  if (!text) {
    throw `Penggunaan:\n${usedPrefix + command} <UID>\n\nContoh:\n${usedPrefix + command} 808187628`;
  }

  const wait = 'Mohon tunggu sebentar...';

  try {
    let res = await fetch(`https://api.mihomo.me/sr_info_parsed/${text}?lang=en`);
    let data = await res.json();

    if (res.ok) {
      let player = data.player;

      let nickname = player.nickname || 'Tidak ditemukan';
      let arLevel = player.level || 'Tidak ditemukan';
      let signature = player.signature || 'Tidak ditemukan';
      let worldLevel = player.world_level || 'Tidak ditemukan';
      let achievement = player.space_info.achievement_count || 'Tidak ditemukan';
      let memoryLevel = player.space_info.memory_data.level || 'Tidak ditemukan';
      let universeLevel = player.space_info.universe_level || 'Tidak ditemukan';

      let ssurl = `https://enka.network/hsr/${text}`;
      let screenshotUrl = `${ssurl}`;
      let screenshot = await captureScreenshot(screenshotUrl);


      let profileMessage = `
       _Mungkin Ada Keterlambatan Pengambilan Data_
                         _Sekitar 5 Menit_

❏────• *Info Profil Honkai SR* •─┈➤ 
┊
┊※﹐Nickname: ${nickname} - TL ${arLevel}
┊※﹐Signature: ${signature}
┊※﹐Achievement: ${achievement}
┊※﹐Equilibrium: Level ${worldLevel}
┊
❏──「 *Challenge* 」
┊
┊※﹐Memory of Chaos: Level ${memoryLevel}
┊※﹐Simulated Universe: Level ${universeLevel}
┊
╰┈➤Lebih Lengkap Di:
 •  https://enka.network/hsr/${text}

 ❖ UID: ${text}
      `.trim();

      await conn.sendFile(m.chat, screenshot.result, 'screenshot.jpg', profileMessage, m);
    } else {
      if (res.status === 400) {
        m.reply('Format UID salah. Mohon masukkan UID yang valid.');
      } else if (res.status === 404) {
        m.reply('Player tidak ditemukan. Mohon periksa kembali UID atau nama player.');
      } else if (res.status === 424) {
        m.reply('Server dalam maintenance atau mengalami masalah setelah pembaruan game. Mohon coba lagi nanti.');
      } else if (res.status === 429) {
        m.reply('Anda telah mencapai batas permintaan. Harap tunggu sebentar sebelum melakukan permintaan lagi.');
      } else if (res.status === 500) {
        m.reply('Terjadi kesalahan pada server. Mohon coba lagi nanti.');
      } else if (res.status === 503) {
        m.reply('Terjadi kesalahan besar pada aplikasi. Kami akan segera memperbaikinya.');
      } else {
        m.reply('Terjadi kesalahan dalam memuat data. Mohon coba lagi nanti.');
      }
    }
  } catch (error) {
    m.reply('Terjadi kesalahan dalam memuat data. Mohon coba lagi nanti.');
  }
};

handler.help = ['hsrprofile'];
handler.tags = ['honkai'];
handler.command = /^(hsrprofile|hsrpf)$/i;
handler.limit = false;
handler.register = true;

export default handler;


// Function to capture a screenshot
async function captureScreenshot(url) {
  return new Promise((resolve, reject) => {
    ssweb(url)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Existing ssweb function...
async function ssweb(url, device = 'desktop') {
  return new Promise((resolve, reject) => {
    const base = 'https://www.screenshotmachine.com';
    const param = {
      url: url,
      device: device,
      cacheLimit: 0
    };

    axios({
      url: base + '/capture.php',
      method: 'POST',
      data: new URLSearchParams(Object.entries(param)),
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then((data) => {
      const cookies = data.headers['set-cookie'];

      if (data.data.status == 'success') {
        axios.get(base + '/' + data.data.link, {
          headers: {
            'cookie': cookies.join('')
          },
          responseType: 'arraybuffer'
        }).then(({ data }) => {
          let result = {
            status: 200,
            author: 'Re7Pntx',
            result: data
          };
          resolve(result);
        });
      } else {
        reject({ status: 404, author: 'Re7Pntx', message: data.data });
      }
    }).catch(reject);
  });
}