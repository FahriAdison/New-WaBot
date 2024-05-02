import yargs from 'yargs';
import cfonts from 'cfonts';
import chalk from 'chalk';
import figlet from 'figlet';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { createRequire } from 'module';
import { createInterface } from 'readline';
import { setupMaster, fork } from 'cluster';
import { watchFile, unwatchFile } from 'fs';

const rl = createInterface(process.stdin, process.stdout);
const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const { name, author } = require(join(__dirname, './package.json'));

const listcolor = ['red', 'blue', 'magenta', 'cyan']; // Changed 'system' to 'cyan' to match chalk color
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];

const color = (text, color) => {
    return !color || !chalk[color] ? chalk.green(text) : chalk[color](text); // Fixed the condition for valid chalk color
};

console.log(color(figlet.textSync('\nMarin Kitagawa', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 90,
    whitespaceBreak: false
  }), randomcolor));
console.log(color(`< =============================== >`, randomcolor));
console.log(color(`[•]`, randomcolor), color(`Hallo : Im Marin Kitagawa`, randomcolor));
console.log(color(`[•]`, randomcolor), color(`Bot Version : 1.0.0`, randomcolor));
console.log(color(`[•]`, randomcolor), color(`Library : Baileys Multi Device`, randomcolor));
console.log(color(`[•]`, randomcolor), color(`Status : Online!`, randomcolor));
console.log(color(`[•]`, randomcolor), color(`Author : Jhnspntx`, randomcolor));
console.log(color(`< =============================== >`, randomcolor));

function printError(message, error) {
  console.error(chalk.red('[ERROR]', message), error);
}

let isRunning = false;
let helloWorldInterval;

function start(file) {
  if (isRunning) return;
  isRunning = true;
  console.log(chalk.blue('[INFO]'), 'Script ini sedang dipantau oleh jhnspntx');
  let args = [join(__dirname, file), ...process.argv.slice(2)];
  setupMaster({ exec: args[0], args: args.slice(1) });
  let p = fork();
  p.on('message', data => {
    console.log(chalk.green('[RECEIVED]'), data);
    switch (data) {
      case 'reset':
        p.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        p.send(process.uptime());
        break;
    }
  });
  p.on('exit', (_, code) => {
    isRunning = false;
    printError('Exited with code:', code);
    if (code !== 0) {
      if (helloWorldInterval) {
        clearInterval(helloWorldInterval);
        helloWorldInterval = null;
      }
      console.log(chalk.blue('[INFO]'), 'Attempting to reconnect...');
      start(file);
    }
    watchFile(args[0], () => {
      unwatchFile(args[0]);
      start(file);
    });
  });
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim());
    });

  p.on('disconnect', () => {
    console.log(chalk.blue('[INFO]'), 'Disconnected. Attempting to reconnect...');
    start(file);
  });

  helloWorldInterval = setInterval(() => {
    if (p.connected) {
      p.send('Hello World!');
    }
  }, 5000);
}

start('main.js');
