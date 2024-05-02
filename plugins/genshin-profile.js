import fetch from 'node-fetch';
import axios from 'axios';


const handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) {
    throw `Penggunaan:\n${usedPrefix + command} <UID>\n\nContoh:\n${usedPrefix + command} 830980536`;
  }

  const wait = 'Mohon tunggu sebentar...';

  try {
    let res = await fetch(`https://enka.network/api/uid/${text}`);
    let data = await res.json();
    let playerInfo = data.data;

    if (res.ok) {
      let nickname = data.playerInfo.nickname || 'Tidak ditemukan';
      let arLevel = data.playerInfo.level || 'Tidak ditemukan';
      let signature = data.playerInfo.signature || 'Tidak ditemukan';
      let worldLevel = data.playerInfo.worldLevel || 'Tidak ditemukan';
      let achievement = data.playerInfo.finishAchievementNum || 'Tidak ditemukan';
      let spiralFloorIndex = data.playerInfo.towerFloorIndex || 'Tidak ditemukan';
      let spiralLeverIndex = data.playerInfo.towerLevelIndex || 'Tidak ditemukan';

      let ssurl = `https://enka.network/u/${text}`;
      let screenshotUrl = `${ssurl}`;
      let screenshot = await captureScreenshot(screenshotUrl);

      let profileMessage = `
        _Data Di Bawah Mungkin Tidak Tepat Dikarenakan_
            _Ada Delay Dalam Pengambilan Data!_
            
  ❏─────• *Info Profil Genshin* •───┈➤
  ┊
  ┊❖﹐Nickname: ${nickname} - AR ${arLevel}
  ┊❖﹐Signature: ${signature}
  ┊✤﹐World Level: ${worldLevel}
  ┊✧﹐Achievement: ${achievement}
  ┊
  ❏───────• *Challenge* •────────
  ┊
  ┊✥﹐Spiral Abbys: ${spiralFloorIndex} - ${spiralLeverIndex}
  ┊
  ╰┈➤Lebih Lengkap Di:
    ❀    https://enka.network/u/${text}
    
    ✧ UID: ${text}
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

handler.help = ['giprofile'];
handler.tags = ['genshin'];
handler.command = /^(giprofile|gipf)$/i;
handler.register = true;
handler.limit = false;

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
      cacheLimit: 0,
      full: true
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