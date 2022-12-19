import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import {handleQuery} from './handlers/index.js';
import {eventEmitterLineQuery} from './event-emitters/index.js';

const {cwd, argv} = process;

const rawUserName = argv.slice(2)[0];
const userName = rawUserName?.startsWith('--username=') ? rawUserName.slice(11) : 'Unknown user';

console.log(`Welcome to the File Manager, ${userName}!`)
console.log(`You are currently in ${cwd()}`)

const rl = readline.createInterface({input, output});

rl.on('line', handleQuery.bind(rl, eventEmitterLineQuery));

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
})

