import {EventEmitter} from 'node:events';
import {mapToEvents} from '../maps/index.js'
import {ERROR_MESSAGE} from "../consts/common.js";

const eventEmitterLineQuery = new EventEmitter();

Object.entries(mapToEvents).forEach(([eventName, cb]) => {
  eventEmitterLineQuery.on(eventName, async (data) => {
    try {
      await cb(data)
    } catch (err) {
      console.log(ERROR_MESSAGE);
    }

    console.log(`You are currently in ${process.cwd()}`)
  });
})

export default eventEmitterLineQuery
