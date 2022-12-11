import {handleUp} from "../handlers/index.js";

const mapToEvents = {
  up: handleUp,
  cat: (args) => {
    console.log(args);
    console.log('not yet implemented');
  },
  add: (args) => console.log('not yet implemented'),
  rn: (args) => console.log('not yet implemented'),
  cp: (args) => console.log('not yet implemented'),
  mv: (args) => console.log('not yet implemented'),
  rm: (args) => console.log('not yet implemented'),
  os: (args) => console.log('not yet implemented'),
  hash: (args) => console.log('not yet implemented'),
  compress: (args) => console.log('not yet implemented'),
  decompress: (args) => console.log('not yet implemented'),
}

export default mapToEvents;
