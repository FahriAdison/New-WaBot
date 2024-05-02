// EGG NYA DI CONFIG.JS

import fetch from "node-fetch";
import crypto from "crypto";
import {
    sizeFormatter
} from "human-readable";

const format = sizeFormatter()
let handler = async (m, {
    conn,
    args,
    text,
    usedPrefix: _p,
    command,
    isROwner
}) => {

    //Manage panel
    const domain = "YOUR DOMAIN" // Domain
    const apikey = "YOUR PLTA" // Apikey
    const c_apikey = "YOUR PLTC" // c Apikey

    const webPage = "YOUR DOMAIN" // Web Page


    switch (command) {
      case "1gb": {
		if (!isROwner) return m.reply("Khusus Owner")
	let t = text.split(',');
	if (t.length < 2) return m.reply(`*Format salah!*
	Penggunaan:
	${_p + command} user,nomer`)
	let username = t[0];
	let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
	let name = username + "1GB"
	let egg = global.egg
	let loc = global.location3
	let memo = "1024"
	let cpu = "30"
	let disk = "1024"
	let email = username + "1398@gmail.com"
	let akunlo = "https://i.pinimg.com/236x/a5/90/4b/a5904b089e4595aea766fe03f11dc75f.jpg" 
	if (!u) return
	let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
	let password = username + "001"
	let f = await fetch(domain + "/api/application/users", {
	"method": "POST",
	"headers": {
	"Accept": "application/json",
	"Content-Type": "application/json",
	"Authorization": "Bearer " + apikey
	},
	"body": JSON.stringify({
	"email": email,
	"username": username,
	"first_name": username,
	"last_name": username,
	"language": "en",
	"password": password
	})
	})
	let data = await f.json();
	if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
	let user = data.attributes
	let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
	"method": "GET",
	"headers": {
	"Accept": "application/json",
	"Content-Type": "application/json",
	"Authorization": "Bearer " + apikey
	}
	})
	m.reply(`DONE By JHNSPNTX PANEL
	
	 *DONE CRATE USER + SERVER ID :* ${user.id}`)
	let ctf = `Hai @${u.split`@`[0]}
	
	 *👤USERNAME* : ${user.username}
	 *🔐PASSWORD* : ${password}
	 *🌐LOGIN* : ${domain}
	
	NOTE :
	1.OWNER HANYA MENGIRIM DATA AKUN 1X 
	2.JANGAN MENGSHARE AKUN PANEL ANDA 
	3.NO SHARE WEBSITE PANEL 
	4. NO MAKSA REFF 
	5.JANGAN LUPA BILANG DONE         TERIMAKASIH
	`
	conn.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
	let data2 = await f2.json();
	let startup_cmd = data2.attributes.startup
	
	let f3 = await fetch(domain + "/api/application/servers", {
	"method": "POST",
	"headers": {
	"Accept": "application/json",
	"Content-Type": "application/json",
	"Authorization": "Bearer " + apikey,
	},
	"body": JSON.stringify({
	"name": name,
	"description": " ",
	"user": user.id,
	"egg": parseInt(egg),
	"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
	"startup": startup_cmd,
	"environment": {
	"INST": "npm",
	"USER_UPLOAD": "0",
	"AUTO_UPDATE": "0",
	"CMD_RUN": "npm start"
	},
	"limits": {
	"memory": memo,
	"swap": 0,
	"disk": disk,
	"io": 500,
	"cpu": cpu
	},
	"feature_limits": {
	"databases": 5,
	"backups": 5,
	"allocations": 1
	},
	deploy: {
	locations: [parseInt(loc)],
	dedicated_ip: false,
	port_range: [],
	},
	})
	})
	let res = await f3.json()
	if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
	let server = res.attributes
	let p = await m.reply(`
	𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
	© JHNSPNTX⚡
	`)
	
	}
	
	break
     case "2gb": {
  if (!isROwner) return m.reply("Khusus Owner")
  
  let t = text.split(',');
  if (t.length < 2) return m.reply(`*Format salah!*
  Penggunaan:
  ${_p + command} user,nomer`)
  let username = t[0];
  let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
  let name = username + "2GB"
  let egg = global.egg
  let loc = global.location3
  let memo = "2048"
  let cpu = "60"
  let disk = "2050"
  let email = username + "1398@gmail.com"
  let akunlo = "https://i.pinimg.com/564x/31/8a/bf/318abfdd70f5a72df0edb6ddf03d3323.jpg" 
  if (!u) return
  let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
  let password = username + "245"
  let f = await fetch(domain + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  },
  "body": JSON.stringify({
  "email": email,
  "username": username,
  "first_name": username,
  "last_name": username,
  "language": "en",
  "password": password
  })
  })
  let data = await f.json();
  if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
  let user = data.attributes
  let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  }
  })
  m.reply(`SUCCES CREATE USER ID: ${user.id}`)
  let ctf = `Hai @${u.split`@`[0]}
  
  ⎙─➤ *👤USERNAME* : ${user.username}
  ⎙─➤ *🔐PASSWORD* : ${password}
  ⎙─➤ *🌐LOGIN* : ${domain}
  
  NOTE:
  OWNER HANYA MENGIRIM 1X DATA 
  AKUN ANDA MOHON DI SIMPAN BAIK BAIK
  KALAU DATA AKUN ANDA HILANG OWNER
  TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
  =====================================
  `
  conn.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
  let data2 = await f2.json();
  let startup_cmd = data2.attributes.startup
  
  let f3 = await fetch(domain + "/api/application/servers", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey,
  },
  "body": JSON.stringify({
  "name": name,
  "description": " ",
  "user": user.id,
  "egg": parseInt(egg),
  "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
  "startup": startup_cmd,
  "environment": {
  "INST": "npm",
  "USER_UPLOAD": "0",
  "AUTO_UPDATE": "0",
  "CMD_RUN": "npm start"
  },
  "limits": {
  "memory": memo,
  "swap": 0,
  "disk": disk,
  "io": 500,
  "cpu": cpu
  },
  "feature_limits": {
  "databases": 5,
  "backups": 5,
  "allocations": 1
  },
  deploy: {
  locations: [parseInt(loc)],
  dedicated_ip: false,
  port_range: [],
  },
  })
  })
  let res = await f3.json()
  if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
  let server = res.attributes
  let p = await m.reply(`
  *SUCCESSFULLY ADD USER + SERVER*
  TYPE: user
  ID: ${user.id}
  NAME: ${user.first_name} ${user.last_name}
  MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
  DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
  CPU: ${server.limits.cpu}%
  
  `)
  
  }
  
  break
        case "3gb": {
   if (!isROwner) return m.reply("Khusus Owner")
  
  let t = text.split(',');
  if (t.length < 2) return m.reply(`*Format salah!*
  Penggunaan:
  ${_p + command} user,nomer`)
  let username = t[0];
  let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
  let name = username + "3GB"
  let egg = global.egg
  let loc = global.location3
  let memo = "3072"
  let cpu = "75"
  let disk = "3073"
  let email = username + "1398@gmail.com"
  let akunlo = "https://i.pinimg.com/564x/31/8a/bf/318abfdd70f5a72df0edb6ddf03d3323.jpg" 
  if (!u) return
  let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
  let password = username + "0431"
  let f = await fetch(domain + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  },
  "body": JSON.stringify({
  "email": email,
  "username": username,
  "first_name": username,
  "last_name": username,
  "language": "en",
  "password": password
  })
  })
  let data = await f.json();
  if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
  let user = data.attributes
  let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  }
  })
  m.reply(`SUCCES CREATE USER ID: ${user.id}`)
  let ctf = `Hai @${u.split`@`[0]}
  
  ⎙─➤ *👤USERNAME* : ${user.username}
  ⎙─➤ *🔐PASSWORD* : ${password}
  ⎙─➤ *🌐LOGIN* : ${domain}
  
  NOTE :
  OWNER HANYA MENGIRIM 1X DATA 
  AKUN ANDA MOHON DI SIMPAN BAIK BAIK
  KALAU DATA AKUN ANDA HILANG OWNER
  TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
  =====================================
  `
  conn.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
  let data2 = await f2.json();
  let startup_cmd = data2.attributes.startup
  
  let f3 = await fetch(domain + "/api/application/servers", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey,
  },
  "body": JSON.stringify({
  "name": name,
  "description": " ",
  "user": user.id,
  "egg": parseInt(egg),
  "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
  "startup": startup_cmd,
  "environment": {
  "INST": "npm",
  "USER_UPLOAD": "0",
  "AUTO_UPDATE": "0",
  "CMD_RUN": "npm start"
  },
  "limits": {
  "memory": memo,
  "swap": 0,
  "disk": disk,
  "io": 500,
  "cpu": cpu
  },
  "feature_limits": {
  "databases": 5,
  "backups": 5,
  "allocations": 1
  },
  deploy: {
  locations: [parseInt(loc)],
  dedicated_ip: false,
  port_range: [],
  },
  })
  })
  let res = await f3.json()
  if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
  let server = res.attributes
  let p = await m.reply(`
  *SUCCESSFULLY ADD USER + SERVER*
  TYPE: user
  ID: ${user.id}
  NAME: ${user.first_name} ${user.last_name}
  MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
  DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
  CPU: ${server.limits.cpu}%
  
  `)
  
  }
  break
  case "4gb": {
   if (!isROwner) return m.reply("Khusus Owner")
  
  let t = text.split(',');
  if (t.length < 2) return m.reply(`*Format salah!*
  Penggunaan:
  ${_p + command} user,nomer`)
  let username = t[0];
  let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
  let name = username + "4GB"
  let egg = global.egg
  let loc = global.location3
  let memo = "4048"
  let cpu = "100"
  let disk = "4040"
  let email = username + "1398@gmail.com"
  let akunlo = "https://i.pinimg.com/564x/31/8a/bf/318abfdd70f5a72df0edb6ddf03d3323.jpg" 
  if (!u) return
  let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
  let password = username + "294"
  let f = await fetch(domain + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  },
  "body": JSON.stringify({
  "email": email,
  "username": username,
  "first_name": username,
  "last_name": username,
  "language": "en",
  "password": password
  })
  })
  let data = await f.json();
  if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
  let user = data.attributes
  let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  }
  })
  m.reply(`SUCCES CREATE USER ID: ${user.id}`)
  let ctf = `Hai @${u.split`@`[0]}
  
  ⎙─➤ *👤USERNAME* : ${user.username}
  ⎙─➤ *🔐PASSWORD* : ${password}
  ⎙─➤ *🌐LOGIN* : ${domain}
  
  NOTE:
  OWNER HANYA MENGIRIM 1X DATA 
  AKUN ANDA MOHON DI SIMPAN BAIK BAIK
  KALAU DATA AKUN ANDA HILANG OWNER
  TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
  =====================================
  `
  conn.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
  let data2 = await f2.json();
  let startup_cmd = data2.attributes.startup
  
  let f3 = await fetch(domain + "/api/application/servers", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey,
  },
  "body": JSON.stringify({
  "name": name,
  "description": " ",
  "user": user.id,
  "egg": parseInt(egg),
  "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
  "startup": startup_cmd,
  "environment": {
  "INST": "npm",
  "USER_UPLOAD": "0",
  "AUTO_UPDATE": "0",
  "CMD_RUN": "npm start"
  },
  "limits": {
  "memory": memo,
  "swap": 0,
  "disk": disk,
  "io": 500,
  "cpu": cpu
  },
  "feature_limits": {
  "databases": 5,
  "backups": 5,
  "allocations": 1
  },
  deploy: {
  locations: [parseInt(loc)],
  dedicated_ip: false,
  port_range: [],
  },
  })
  })
  let res = await f3.json()
  if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
  let server = res.attributes
  let p = await m.reply(`
  *SUCCESSFULLY ADD USER + SERVER*
  TYPE: user
  ID: ${user.id}
  NAME: ${user.first_name} ${user.last_name}
  MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
  DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
  CPU: ${server.limits.cpu}%
  
  `)
  
  }
  
  break
  
  case "5gb": {
   if (!isROwner) return m.reply("Khusus Owner")
  
  let t = text.split(',');
  if (t.length < 2) return m.reply(`*Format salah!*
  Penggunaan:
  ${_p + command} user,nomer`)
  let username = t[0];
  let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
  let name = username + "5GB"
  let egg = global.egg
  let loc = global.location3
  let memo = "5138"
  let cpu = "125"
  let disk = "5138"
  let email = username + "1398@gmail.com"
  let akunlo = "https://i.pinimg.com/564x/31/8a/bf/318abfdd70f5a72df0edb6ddf03d3323.jpg" 
  if (!u) return
  let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
  let password = username + "9011"
  let f = await fetch(domain + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  },
  "body": JSON.stringify({
  "email": email,
  "username": username,
  "first_name": username,
  "last_name": username,
  "language": "en",
  "password": password
  })
  })
  let data = await f.json();
  if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
  let user = data.attributes
  let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  }
  })
  m.reply(`SUCCES CREATE USER ID: ${user.id}`)
  let ctf = `Hai @${u.split`@`[0]}
  
  ⎙─➤ *👤USERNAME* : ${user.username}
  ⎙─➤ *🔐PASSWORD* : ${password}
  ⎙─➤ *🌐LOGIN* : ${domain}
  
  
  NOTE:
  OWNER HANYA MENGIRIM 1X DATA 
  AKUN ANDA MOHON DI SIMPAN BAIK BAIK
  KALAU DATA AKUN ANDA HILANG OWNER
  TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
  =====================================
  `
  conn.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
  let data2 = await f2.json();
  let startup_cmd = data2.attributes.startup
  
  let f3 = await fetch(domain + "/api/application/servers", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey,
  },
  "body": JSON.stringify({
  "name": name,
  "description": " ",
  "user": user.id,
  "egg": parseInt(egg),
  "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
  "startup": startup_cmd,
  "environment": {
  "INST": "npm",
  "USER_UPLOAD": "0",
  "AUTO_UPDATE": "0",
  "CMD_RUN": "npm start"
  },
  "limits": {
  "memory": memo,
  "swap": 0,
  "disk": disk,
  "io": 500,
  "cpu": cpu
  },
  "feature_limits": {
  "databases": 5,
  "backups": 5,
  "allocations": 1
  },
  deploy: {
  locations: [parseInt(loc)],
  dedicated_ip: false,
  port_range: [],
  },
  })
  })
  let res = await f3.json()
  if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
  let server = res.attributes
  let p = await m.reply(`
  *SUCCESSFULLY ADD USER + SERVER*
  TYPE: user
  ID: ${user.id}
  NAME: ${user.first_name} ${user.last_name}
  MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
  DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
  CPU: ${server.limits.cpu}%
  
  `)
  
  }
  
  break
  case "6gb": {
   if (!isROwner) return m.reply("Khusus Owner")
  
  let t = text.split(',');
  if (t.length < 2) return m.reply(`*Format salah!*
  Penggunaan:
  ${_p + command} user,nomer`)
  let username = t[0];
  let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
  let name = username + "6GB"
  let egg = global.egg
  let loc = global.location3
  let memo = "6100"
  let cpu = "140"
  let disk = "6100"
  let email = username + "1398@gmail.com"
  let akunlo = "https://i.pinimg.com/564x/31/8a/bf/318abfdd70f5a72df0edb6ddf03d3323.jpg" 
  if (!u) return
  let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
  let password = username + "4957"
  let f = await fetch(domain + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  },
  "body": JSON.stringify({
  "email": email,
  "username": username,
  "first_name": username,
  "last_name": username,
  "language": "en",
  "password": password
  })
  })
  let data = await f.json();
  if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
  let user = data.attributes
  let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  }
  })
  m.reply(`SUCCES CREATE USER ID: ${user.id}`)
  let ctf = `Hai @${u.split`@`[0]}
  
  ⎙─➤ *👤USERNAME* : ${user.username}
  ⎙─➤ *🔐PASSWORD* : ${password}
  ⎙─➤ *🌐LOGIN* : ${domain}
  
  
  NOTE:
  OWNER HANYA MENGIRIM 1X DATA 
  AKUN ANDA MOHON DI SIMPAN BAIK BAIK
  KALAU DATA AKUN ANDA HILANG OWNER
  TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
  =====================================
  `
  conn.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
  let data2 = await f2.json();
  let startup_cmd = data2.attributes.startup
  
  let f3 = await fetch(domain + "/api/application/servers", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey,
  },
  "body": JSON.stringify({
  "name": name,
  "description": " ",
  "user": user.id,
  "egg": parseInt(egg),
  "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
  "startup": startup_cmd,
  "environment": {
  "INST": "npm",
  "USER_UPLOAD": "0",
  "AUTO_UPDATE": "0",
  "CMD_RUN": "npm start"
  },
  "limits": {
  "memory": memo,
  "swap": 0,
  "disk": disk,
  "io": 500,
  "cpu": cpu
  },
  "feature_limits": {
  "databases": 5,
  "backups": 5,
  "allocations": 1
  },
  deploy: {
  locations: [parseInt(loc)],
  dedicated_ip: false,
  port_range: [],
  },
  })
  })
  let res = await f3.json()
  if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
  let server = res.attributes
  let p = await m.reply(`
  *SUCCESSFULLY ADD USER + SERVER*
  TYPE: user
  ID: ${user.id}
  NAME: ${user.first_name} ${user.last_name}
  MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
  DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
  CPU: ${server.limits.cpu}%
  
  `)
  
  }
  
  break
  case "7gb": {
   if (!isROwner) return m.reply("Khusus Owner")
  
  let t = text.split(',');
  if (t.length < 2) return m.reply(`*Format salah!*
  Penggunaan:
  ${_p + command} user,nomer`)
  let username = t[0];
  let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
  let name = username + "7GB"
  let egg = global.egg
  let loc = global.location3
  let memo = "7000"
  let cpu = "160"
  let disk = "7000"
  let email = username + "1398@gmail.com"
  let akunlo = "https://i.pinimg.com/564x/31/8a/bf/318abfdd70f5a72df0edb6ddf03d3323.jpg" 
  if (!u) return
  let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
  let password = username + "8192"
  let f = await fetch(domain + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  },
  "body": JSON.stringify({
  "email": email,
  "username": username,
  "first_name": username,
  "last_name": username,
  "language": "en",
  "password": password
  })
  })
  let data = await f.json();
  if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
  let user = data.attributes
  let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  }
  })
  m.reply(`SUCCES CREATE USER ID: ${user.id}`)
  let ctf = `Hai @${u.split`@`[0]}
  
  ⎙─➤ *👤USERNAME* : ${user.username}
  ⎙─➤ *🔐PASSWORD* : ${password}
  ⎙─➤ *🌐LOGIN* : ${domain}
  
  
  NOTE:
  OWNER HANYA MENGIRIM 1X DATA 
  AKUN ANDA MOHON DI SIMPAN BAIK BAIK
  KALAU DATA AKUN ANDA HILANG OWNER
  TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
  =====================================
  `
  conn.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
  let data2 = await f2.json();
  let startup_cmd = data2.attributes.startup
  
  let f3 = await fetch(domain + "/api/application/servers", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey,
  },
  "body": JSON.stringify({
  "name": name,
  "description": " ",
  "user": user.id,
  "egg": parseInt(egg),
  "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
  "startup": startup_cmd,
  "environment": {
  "INST": "npm",
  "USER_UPLOAD": "0",
  "AUTO_UPDATE": "0",
  "CMD_RUN": "npm start"
  },
  "limits": {
  "memory": memo,
  "swap": 0,
  "disk": disk,
  "io": 500,
  "cpu": cpu
  },
  "feature_limits": {
  "databases": 5,
  "backups": 5,
  "allocations": 1
  },
  deploy: {
  locations: [parseInt(loc)],
  dedicated_ip: false,
  port_range: [],
  },
  })
  })
  let res = await f3.json()
  if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
  let server = res.attributes
  let p = await m.reply(`
  *SUCCESSFULLY ADD USER + SERVER*
  TYPE: user
  ID: ${user.id}
  NAME: ${user.first_name} ${user.last_name}
  MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
  DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
  CPU: ${server.limits.cpu}%
  
  `)
  
  }
  
  break
  case "8gb": {
  if (!isROwner) return m.reply("Khusus Owner")
  
  let t = text.split(',');
  if (t.length < 2) return m.reply(`*Format salah!*
  Penggunaan:
  ${_p + command} user,nomer`)
  let username = t[0];
  let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
  let name = username + "8GB"
  let egg = global.egg
  let loc = global.location3
  let memo = "8128"
  let cpu = "185"
  let disk = "8128"
  let email = username + "1398@gmail.com"
  let akunlo = "https://i.pinimg.com/564x/31/8a/bf/318abfdd70f5a72df0edb6ddf03d3323.jpg" 
  if (!u) return
  let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
  let password = username + "3912"
  let f = await fetch(domain + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  },
  "body": JSON.stringify({
  "email": email,
  "username": username,
  "first_name": username,
  "last_name": username,
  "language": "en",
  "password": password
  })
  })
  let data = await f.json();
  if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
  let user = data.attributes
  let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  }
  })
  m.reply(`SUCCES CREATE USER ID: ${user.id}`)
  let ctf = `Hai @${u.split`@`[0]}
  
  ⎙─➤ *👤USERNAME* : ${user.username}
  ⎙─➤ *🔐PASSWORD* : ${password}
  ⎙─➤ *🌐LOGIN* : ${domain}
  
  
  NOTE:
  OWNER HANYA MENGIRIM 1X DATA 
  AKUN ANDA MOHON DI SIMPAN BAIK BAIK
  KALAU DATA AKUN ANDA HILANG OWNER
  TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
  =====================================
  `
  conn.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
  let data2 = await f2.json();
  let startup_cmd = data2.attributes.startup
  
  let f3 = await fetch(domain + "/api/application/servers", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey,
  },
  "body": JSON.stringify({
  "name": name,
  "description": " ",
  "user": user.id,
  "egg": parseInt(egg),
  "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
  "startup": startup_cmd,
  "environment": {
  "INST": "npm",
  "USER_UPLOAD": "0",
  "AUTO_UPDATE": "0",
  "CMD_RUN": "npm start"
  },
  "limits": {
  "memory": memo,
  "swap": 0,
  "disk": disk,
  "io": 500,
  "cpu": cpu
  },
  "feature_limits": {
  "databases": 5,
  "backups": 5,
  "allocations": 1
  },
  deploy: {
  locations: [parseInt(loc)],
  dedicated_ip: false,
  port_range: [],
  },
  })
  })
  let res = await f3.json()
  if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
  let server = res.attributes
  let p = await m.reply(`
  *SUCCESSFULLY ADD USER + SERVER*
  TYPE: user
  ID: ${user.id}
  NAME: ${user.first_name} ${user.last_name}
  MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
  DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
  CPU: ${server.limits.cpu}%
  
  `)
  
  }
  
  break
       case "unli": {
  if (!isROwner) return m.reply("Khusus Owner")
  let t = text.split(',');
  if (t.length < 2) return m.reply(`*Format salah!*
  Penggunaan:
  ${_p + command} user,nomer`)
  let username = t[0];
  let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
  let name = username + "Unlimited"
  let egg = global.egg
  let loc = global.location3
  let memo = "0"
  let cpu = "0"
  let disk = "0"
  let email = username + "1398@gmail.com"
  let akunlo = "https://i.pinimg.com/564x/31/8a/bf/318abfdd70f5a72df0edb6ddf03d3323.jpg" 
  if (!u) return
  let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
  let password = username + "3581"
  let f = await fetch(domain + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  },
  "body": JSON.stringify({
  "email": email,
  "username": username,
  "first_name": username,
  "last_name": username,
  "language": "en",
  "password": password
  })
  })
  let data = await f.json();
  if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
  let user = data.attributes
  let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  }
  })
  m.reply(`SUCCES CREATE USER ID: ${user.id}`)
  let ctf = `Hai @${u.split`@`[0]}
  
  ⎙─➤ *👤USERNAME* : ${user.username}
  ⎙─➤ *🔐PASSWORD* : ${password}
  ⎙─➤ *🌐LOGIN* : ${domain}
  
  
  NOTE:
  OWNER HANYA MENGIRIM 1X DATA 
  AKUN ANDA MOHON DI SIMPAN BAIK BAIK
  KALAU DATA AKUN ANDA HILANG OWNER
  TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
  =====================================
  `
  conn.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
  let data2 = await f2.json();
  let startup_cmd = data2.attributes.startup
  
  let f3 = await fetch(domain + "/api/application/servers", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey,
  },
  "body": JSON.stringify({
  "name": name,
  "description": " ",
  "user": user.id,
  "egg": parseInt(egg),
  "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
  "startup": startup_cmd,
  "environment": {
  "INST": "npm",
  "USER_UPLOAD": "0",
  "AUTO_UPDATE": "0",
  "CMD_RUN": "npm start"
  },
  "limits": {
  "memory": memo,
  "swap": 0,
  "disk": disk,
  "io": 500,
  "cpu": cpu
  },
  "feature_limits": {
  "databases": 5,
  "backups": 5,
  "allocations": 1
  },
  deploy: {
  locations: [parseInt(loc)],
  dedicated_ip: false,
  port_range: [],
  },
  })
  })
  let res = await f3.json()
  if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
  let server = res.attributes
  let p = await m.reply(`
  *SUCCESSFULLY ADD USER + SERVER*
  TYPE: user
  ID: ${user.id}
  NAME: ${user.first_name} ${user.last_name}
  MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
  DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
  CPU: ${server.limits.cpu}%
  
  `)
  
  }
  
  break
        case "addusr": {
  
  if (!isROwner) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
  let t = text.split(',');
  if (t.length < 3) return m.reply(`*Format salah!*
  Penggunaan:
  ${_p + command} email,username,name,number/tag`);
  let email = t[0];
  let username = t[1];
  let name = t[2];
  let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
  if (!u) return m.reply(`*Format salah!*
  s
  Penggunaan:
  ${_p + command} email,username,name,number/tag`);
  let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
  let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
  let f = await fetch(domain + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  },
  "body": JSON.stringify({
  "email": email,
  "username": username,
  "first_name": name,
  "last_name": "Memb",
  "language": "en",
  "password": password.toString()
  })
  })
  let data = await f.json();
  if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
  let user = data.attributes
  let p = await conn.sendMessage(m.chat, { text: `
  *SUCCESSFULLY ADD USER*
  
  ╭─❏ *『 USER INFO 』*
  ┣❐ ➤ *ID* : ${user.id}
  ┣❏ ➤ *USERNAME* : ${user.username}
  ┣❏ ➤ *EMAIL* : ${user.email}
  ┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
  ┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
  })
  conn.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
  ╭─❏ *『 USER INFO 』*
  ┣❏ ➤ *📧EMAIL* : ${email}
  ┣❏ ➤ *👤USERNAME* : ${username}
  ┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
  ┣❏ ➤ *🌐LOGIN* : ${domain}
  ┗⬣`,
  })
  }
  break
       case "listusr": {
    if (!isROwner) return global.dfail("rowner", m, conn)
    let page = args[0] ? args[0] : '1';
    let f = await fetch(domain + "/api/application/users?page=" + page, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });
    let res = await f.json();
    let users = res.data;
    let messageText = "Berikut list user:\n\n";
  
    for (let user of users) {
        let u = user.attributes;
        messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
        messageText += `${u.username}\n`;
        messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  
    messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
    messageText += `Total Users: ${res.meta.pagination.count}`;
  
    await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
    if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
        m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
    }
}
break;
        case "delusr": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let usr = args[0]
            if (!usr) return m.reply("Masukkan ID")
            let f = await fetch(domain + "/api/application/users/" + usr, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            //let res = await f.json()
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply("*User Tidak Terdaftar*")
            m.reply("*Sukses Menghapus User*")
        }
        break
        case "detusr": {
            let usr = args[0]
            let f = await fetch(domain + "/api/application/users/" + usr, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = await f.json()
            if (res.errors) return m.reply("*User Tidak Ada*")
            let u = res.attributes
            m.reply(`*${u.username.toUpperCase()} Detail User*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
Username: ${u.username}
Email: ${u.email}
Name: ${u.first_name} ${u.last_name}
Language: ${u.language}
Admin: ${u.root_admin}
Dibuat: ${u.created_at}\`\`\``)
        }
        break
        case "addsrv": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let s = text.split(",");
            if (s.length < 7) return m.reply(`> Perintah :\n
${_p + command} name,desc,userId,eggId,locId,memory/disk,cpu`)
            let name = s[0];
            let desc = s[1] || ""
            let usr_id = s[2];
            let egg = s[3];
            let loc = s[4];
            let memo_disk = s[5].split`/`;
            let cpu = s[6];

            let f1 = await fetch(domain + "/api/application/nests/6/eggs/" + egg, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let data = await f1.json();
            //console.log(data.attributes.startup)
            let startup_cmd = "${CMD_RUN}"

            let f = await fetch(domain + "/api/application/servers", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                },
                "body": JSON.stringify({
                    "name": name,
                    "description": desc,
                    "user": usr_id,
                    "egg": parseInt(egg),
                    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                    "startup": startup_cmd,
                    "environment": {
                        "INST": "npm",
                        "USER_UPLOAD": "0",
                        "AUTO_UPDATE": "0",
                        "CMD_RUN": "node index.js"
                    },
                    "limits": {
                        "memory": memo_disk[0],
                        "swap": 0,
                        "disk": memo_disk[1],
                        "io": 500,
                        "cpu": cpu
                    },
                    "feature_limits": {
                        "databases": 0,
                        "backups": 1,
                        "allocations": 0
                    },
                    // "allocation": {
                    //     "default": 36
                    // }
                    deploy: {
                        locations: [parseInt(loc)],
                        dedicated_ip: false,
                        port_range: [],
                    },
                })
            })
            let res = await f.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            m.reply(`*== [ Info Server Dibuat ] ==*

Type: ${res.object}
ID: ${server.id}
Name: ${server.name}
Description: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Expired: 1 Bulan`)
        }
        break
         case "listsrv": {
  if (!isROwner) return m.reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
  let s = server.attributes;
  
  let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + c_apikey
  }
  });
  
  let data = await f3.json();
  let status = data.attributes ? data.attributes.current_state : s.status;
  
  messageText += `ID Server: ${s.id}\n`;
  messageText += `Nama Server: ${s.name}\n`;
  messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
  reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
  }
  break;
        case "delsrv": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let srv = args[0]
            if (!srv) return m.reply("ID nya mana?")
            let f = await fetch(domain + "/api/application/servers/" + srv, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply("*Server Tidak Ditemukan*")
            m.reply("*Sukses Menghapus Server*")
        }
        break
        case "detsrv": {
            let srv = args[0]
            let f = await fetch(domain + "/api/application/servers/" + srv, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = await f.json();
            if (res.errors) return m.reply("*Server Tidak Ditemukan*")
            let s = res.attributes
            let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-` [0] + "/resources", {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + c_apikey
                }
            })
            let data = await f2.json();
            let t = data.attributes
            m.reply(`*${s.name.toUpperCase()} Detail Server*

\`\`\`Status: ${t.current_state}

ID: ${s.id}
UUID: ${s.uuid}
Name: ${s.name}
Desc: ${s.description}
Memory: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? "Unlimited" : s.limits.memory + "Mb"}
Disk: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? "Unlimited" : s.limits.disk + "Mb"}
Cpu: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? "Unlimited" : s.limits.cpu + "%"}
Dibuat: ${s.created_at}\`\`\``)
        }
        break
        case "updatesrv": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 4) return m.reply(`Perintah :\n
${_p + command} srvId,locId,memory/disk,cpu`)
            let srv = t[0];
            let loc = t[1];
            let memo_disk = t[2].split`/`;
            let cpu = t[3];
            let f1 = await fetch(domain + "/api/application/servers/" + srv, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let data = await f1.json()

            let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
                "method": "PATCH",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "allocation": parseInt(loc) || data.attributes.allocation,
                    "memory": memo_disk[0] || data.attributes.limits.memory,
                    "swap": data.attributes.limits.swap || 0,
                    "disk": memo_disk[1] || data.attributes.limits.disk,
                    "io": 500,
                    "cpu": cpu || data.attributes.limits.cpu,
                    "threads": null,
                    "feature_limits": {
                        "databases": 5,
                        "allocations": 5,
                        "backups": 5
                    }
                })
            })
            let res = await f.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            m.reply(`*Update Server Info*

Type: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
Name: ${server.name}
Desc: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Diupdate: ${server.updated_at}`)
        }
        break
     case "createadmin": {
  if (!isROwner) return m.reply("Maaf Fitur Ini Hanya Bisa Digunakan Oleh Owner")
  
  let s = text.split(',')
  let email = s[0];
  let username = s[0]
  let nomor = s[1]
  if (s.length < 2) return m.reply(`*Format salah!*
  Penggunaan:
  ${_p + command} user,nomer`)
  if (!username) return m.reply(`Ex : ${_p + command} Username,@tag/nomor\n\nContoh :\n${_p + command} example,@user`)
  if (!nomor) return m.reply(`Ex : ${_p + command} Username,@tag/nomor\n\nContoh :\n${_p + command} example,@user`)
  let password = username + "46093"
  let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  let f = await fetch(domain + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  },
  "body": JSON.stringify({
  "email": username + "@gmail.com",
  "username": username,
  "first_name": username,
  "last_name": "Memb",
  "language": "en",
   "root_admin" : true,
  "password": password.toString()
  })
  
  })
  
  let data = await f.json();
  
  if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
  
  let user = data.attributes
  
  let tks = `TYPE: user
  
  📡ID: ${user.id}
  🌷UUID: ${user.uuid}
  👤USERNAME: ${user.username}
  📬EMAIL: ${user.email}
  🦖NAME: ${user.first_name} ${user.last_name}
  🔥LANGUAGE: ${user.language}
  📊ADMIN: ${user.root_admin}
  ☢️CREATED AT: ${user.created_at}
  
  🖥️LOGIN: ${domain}
  `
  const listMessage = {
  
  text: tks,
  
  }
  
  
  
  await conn.sendMessage(m.chat, listMessage)
  
  await conn.sendMessage(nomornya, {
  
  text: `*BERIKUT DETAIL AKUN ADMINPANEL ANDA*\n
  USERNAME :${username}
  PASSWORD: ${password}
  LOGIN: ${domain}
  
  
  *NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
  
  
  `,
  
  })
  
  }
  break
         case "listadmin": {
  if (!isROwner) return m.reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
  }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";
  
  for (let user of users) {
  let u = user.attributes;
  if (u.root_admin) {
  messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
  messageText += `${u.username}\n`;
  messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;
  
  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
  m.reply(`Gunakan perintah ${_p}listadmin ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
  }
  break;
              case 'suspend': {
      if (!isROwner) return m.reply(`Khusus Ownerku`)
      let srv = args[0]
      if (!srv) return m.reply('ID nya mana?')
      let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
          "method": "POST",
          "headers": {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + apikey
          }
      })
      let res = f.ok ? {
          errors: null
      } : await f.json()
      if (res.errors) return m.reply('*SERVER NOT FOUND*')
      m.reply('*BERHASIL SUSPEND..*')
  }
      break
      case 'unsuspend': {
      if (!isROwner) return m.reply (`Khusus Ownerku`)
      let srv = args[0]
      if (!srv) return m.reply('ID nya mana?')
      let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
          "method": "POST",
          "headers": {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + apikey
          }
      })
      let res = f.ok ? {
          errors: null
      } : await f.json()
      if (res.errors) return m.reply('*SERVER NOT FOUND*')
     m.reply('*BERHASIL BUKA SUSPEND..*')
  }
      break
        case "startsrv":
        case "stopsrv":
        case "restartsrv": {
            let action = command.replace("srv", "")
            if (!isROwner) return global.dfail("rowner", m, conn)
            let srv = args[0]
            if (!srv) return m.reply("ID nya mana?")
            let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + c_apikey,
                },
                "body": JSON.stringify({
                    "signal": action
                })
            })

            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            m.reply(`*Sukses ${action.toUpperCase()} THE SERVER*`)
        }
    }
}

handler.help = ["1gb","2gb","3gb","4gb","5gb","6gb","7gb","8gb","unli","suspend","unsuspend","createadmin","addusr", "delusr", "listusr", "detusr", "addsrv", "delsrv", "listsrv", "detsrv", "reinstall", "updatesrv", "startsrv", "stopsrv", "restartsrv"];
handler.command = ["1gb","2gb","3gb","4gb","5gb","6gb","7gb","8gb","unli","suspend","unsuspend","createadmin","addusr", "delusr", "listusr","listadmin", "detusr", "addsrv", "delsrv", "listsrv", "detsrv", "reinstall", "updatesrv", "startsrv", "stopsrv", "restartsrv"];
handler.tags = ["owner"]
handler.owner = true
export default handler