import {EventEmitter} from "node:events";
import {mapToEvents} from '../maps/index.js'

const eventEmitterLineQuery = new EventEmitter();

Object.entries(mapToEvents).forEach(([eventName, cb]) => {
  eventEmitterLineQuery.on(eventName, cb);
})

export default eventEmitterLineQuery
