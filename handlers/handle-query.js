import {mapToEvents} from '../maps/index.js';

export default function handleQuery(eventEmitter, data) {
  const [command, ...args] = data.split(' ').filter((arg) => arg !== '');

  if (data === '.exit') {
    this.close();
    return;
  }

  if (!mapToEvents[command]) {
    console.log('Invalid input');
    return;
  }
  eventEmitter.emit(command, args);
}

