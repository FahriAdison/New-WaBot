const delay = 500;

export default {
  fixDelay: (conn, message) => {
    setTimeout(() => {
      conn.sendMessage(message.chat, message.content, message);
    }, delay);
  }
};
