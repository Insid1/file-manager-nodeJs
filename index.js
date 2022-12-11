import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import {handleQuery} from "./handlers/index.js";
import {eventEmitterLineQuery} from "./event-emitters/index.js";

const rl = readline.createInterface({input, output});

rl.on('line', handleQuery.bind(rl, eventEmitterLineQuery))

rl.on('close', () => {
  console.log('we are closing!')
})

