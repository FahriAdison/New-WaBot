/**
instagram @riz06y_
whatsapp wa.me/62882003146309
jangan dihapus ini wm anj
*/

async function handler(m, { conn, usedPrefix, command, text }) {
  conn.bj = conn.bj ? conn.bj : {};
  if (m.sender in conn.bj) return m.reply("Kamu masih dalam game, tunggu sampai selesai!!");
  try {
    let cards = [
      'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
    ];

    let playerCards = [];
    let computerCards = [];

    let calculateTotal = (cardArray) => {
      let total = 0;
      let hasAce = false;

      for (let card of cardArray) {
        if (card === 'A') {
          total += 11;
          hasAce = true;
        } else if (card === 'K' || card === 'Q' || card === 'J') {
          total += 10;
        } else {
          total += parseInt(card);
        }
      }

      if (hasAce && total > 21) {
        total -= 10;
      }

      return total;
    };

    let pickCard = () => {
      let index = Math.floor(Math.random() * cards.length);
      return cards[index];
    };

    if (!(m.sender in conn.bj)) {
      let bet = parseInt(text);
      let maxbet = 5000; // Contoh nilai maxbet
      if (isNaN(bet) || bet <= 0 || bet > maxbet) {
        return m.reply(`Masukkan Jumlah yang valid dan tidak lebih dari ${maxbet}!\n\nContoh: *${usedPrefix + command} 5000*`);
      }
      if (global.db.data.users[m.sender].money < bet) {
        return m.reply('money kamu tidak mencukupi')
        }

      playerCards.push(pickCard());
      playerCards.push(pickCard());
      computerCards.push(pickCard());

      let playerTotal = calculateTotal(playerCards);
      let computerTotal = calculateTotal(computerCards);

      if (playerTotal === 21 && computerTotal !== 21) {
        sendResultMessage(`*Kamu mendapatkan Blackjack! Kamu menang!*\n*+${bet} money*`, playerTotal, computerTotal);
        global.db.data.users[m.sender].money += bet * 1;
        delete conn.bj[m.sender];
      } else if (playerTotal === 21 && computerTotal === 21) {
        sendResultMessage('*Hasilnya SERI! Keduanya mendapatkan Blackjack!*', playerTotal, computerTotal);
        delete conn.bj[m.sender];
      } else {
        conn.bj[m.sender] = {
          playerCards: playerCards,
          computerCards: computerCards,
          playerTotal: playerTotal,
          computerTotal: computerTotal,
          bet: bet,
          timeout: setTimeout(() => {
            m.reply('waktu habis');
            delete conn.bj[m.sender];
          }, 60000)
        };

        let message = `*• B L A C K J A C K*\n\n`;
        message += `╭── •\n`
        message += `│ ◦ *Kartu Kamu:* ${playerCards.join(', ')}\n`;
        message += `│ ◦ *Total Kamu:* ${playerTotal}\n`;
        message += `├─ •\n`
        message += `│ ◦ *Kartu Komputer:* ${computerCards[0]}, ?\n`;
        message += `│ ◦ *Taruhan:* ${bet}\n`;
        message += `╰── •\n\n`;
        message += `Ketik *hit* untuk mengambil kartu tambahan.\n`;
        message += `Ketik *stand* untuk mengakhiri giliran.`;
        
        conn.reply(m.chat, message, m, {
    contextInfo: {
      externalAdReply: {
        title: 'C A S I N O',
        body: "",
        thumbnailUrl: "https://telegra.ph/file/1703cff0a758d0ef8f84f.png",
        sourceUrl: yt,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
      }
    }
  } catch (e) {
    console.error(e);
    conn.reply(m.chat, 'Terjadi kesalahan saat menjalankan game Blackjack.', m);
    
    if (m.sender in conn.bj) {
    let { timeout } = conn.bj[m.sender];
    clearTimeout(timeout);
    delete conn.bj[m.sender];
    return true;
  }
 }
}

handler.before = async m => {
  conn.bj = conn.bj ? conn.bj : {};
  if (!(m.sender in conn.bj)) return;
  if (m.isBaileys) return;
  
  let { timeout } = conn.bj[m.sender];
  let txt = (m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : '').toLowerCase();
  if (txt !== "stand" && txt !== "hit") return;

  let cards = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
  ];

  let calculateTotal = (cardArray) => {
    let total = 0;
    let hasAce = false;

    for (let card of cardArray) {
      if (card === 'A') {
        total += 11;
        hasAce = true;
      } else if (card === 'K' || card === 'Q' || card === 'J') {
        total += 10;
      } else {
        total += parseInt(card);
      }
    }

    if (hasAce && total > 21) {
      total -= 10;
    }

    return total;
  };

  let pickCard = () => {
    let index = Math.floor(Math.random() * cards.length);
    return cards[index];
  };

  let bjData = conn.bj[m.sender];
  let playerCards = bjData.playerCards;
  let computerCards = bjData.computerCards;
  let playerTotal = calculateTotal(playerCards);
  let computerTotal = bjData.computerTotal;
  let bet = bjData.bet;

  let sendResultMessage = (result, playerTotal, computerTotal) => {
    let message = `*• B L A C K J A C K - R E S U L T*\n\n`;
    message += `╭── •\n`
    message += `│ ◦ *Kartu Kamu:* ${playerCards.join(', ')}\n`;
    message += `│ ◦ *Total Kamu:* ${playerTotal}\n`;
    message += `├─ •\n`
    message += `│ ◦ *Kartu Komputer*: ${computerCards.join(', ')}\n`;
    message += `│ ◦ *Total Komputer:* ${computerTotal}\n`;
    message += `╰── •\n\n`;
    message += `${result}`;

    conn.reply(m.chat, message, m, {
    contextInfo: {
      externalAdReply: {
        title: 'C A S I N O',
        body: "",
        thumbnailUrl: "https://telegra.ph/file/1703cff0a758d0ef8f84f.png",
        sourceUrl: yt,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
  };

  try {
    if (/^hit?$/i.test(txt)) {
      let newCard = pickCard();
      playerCards.push(newCard);
      playerTotal = calculateTotal(playerCards);

      if (playerTotal > 21) {
        sendResultMessage(`*Kamu kalah! Total kartu melebihi 21.*\n*-${bet} money*`, playerTotal, computerTotal);
        global.db.data.users[m.sender].money -= bet;
        clearTimeout(conn.bj[m.sender].timeout);
        delete conn.bj[m.sender];
      } else if (playerTotal == 21) {
        sendResultMessage(`Kamu menang!*\n*+${bet} money*`, playerTotal, computerTotal);
        global.db.data.users[m.sender].money += bet * 1;
        clearTimeout(timeout);
        delete conn.bj[m.sender];
      } else {
        let message = `*• B L A C K J A C K*\n\n`;
        message += `╭── •\n`
        message += `│ ◦ *Kartu Kamu:* ${playerCards.join(', ')}\n`;
        message += `│ ◦ *Total Kamu:* ${playerTotal}\n`;
        message += `├─ •\n`
        message += `│ ◦ *Kartu Komputer:* ${computerCards[0]}, ?\n`;
        message += `│ ◦ *Taruhan:* ${bet}\n`;
        message += `╰── •\n\n`;
        message += `Ketik *hit* untuk mengambil kartu tambahan.\n`;
        message += `Ketik *stand* untuk mengakhiri giliran.`;

        conn.reply(m.chat, message, m, {
    contextInfo: {
      externalAdReply: {
        title: 'C A S I N O',
        body: "",
        thumbnailUrl: "https://telegra.ph/file/1703cff0a758d0ef8f84f.png",
        sourceUrl: yt,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
      }

    } else if (/^stand?$/i.test(txt)) {
      while (computerTotal < 18) {
        let newCard = pickCard();
        computerCards.push(newCard);
        computerTotal = calculateTotal(computerCards);
      }

      if (computerTotal > 21) {
        sendResultMessage(`*Kamu menang! Total kartu Komputer melebihi 21.*\n*+${bet} money*`, playerTotal, computerTotal);
        global.db.data.users[m.sender].money += bet * 1;
      } else if (playerTotal > computerTotal) {
        sendResultMessage(`*Kamu menang!*\n*+${bet} money*`, playerTotal, computerTotal);
        global.db.data.users[m.sender].money += bet * 1;
      } else if (playerTotal < computerTotal) {
        sendResultMessage(`*Kamu kalah!*\n*-${bet} money*`, playerTotal, computerTotal);
        global.db.data.users[m.sender].money -= bet;
      } else {
        sendResultMessage('*Hasilnya SERI!*', playerTotal, computerTotal);
      }
      clearTimeout(timeout);
      delete conn.bj[m.sender];
    }
  } catch (e) {
    console.error(e);
    conn.reply(m.chat, 'Terjadi kesalahan saat menjalankan game Blackjack.', m);
    clearTimeout(timeout);
    delete conn.bj[m.sender];
    return true;
  }
}

handler.help = ['blackjack']
handler.tags = ['game']
handler.command = /^(blackjack|bj)$/i

handler.register = false
handler.limit = false


export default handler;