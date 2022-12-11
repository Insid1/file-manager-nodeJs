import {mapToEvents} from "../maps/index.js";

const handleQuery = (eventEmitter, data) => {
  const [command, ...args] = data.split(' ').filter((arg) => arg !== '');

  if (!mapToEvents[command]) {
    console.log('no such command, enter command due to task');
    return;
  }
  eventEmitter.emit(command, args);
}

export default handleQuery;
