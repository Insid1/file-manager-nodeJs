import {handleAdd, handleCat, handleCd, handleLs, handleUp} from "../handlers/index.js";

const mapToEvents = {
  up: handleUp,
  cd: handleCd,
  ls: handleLs,
  cat: handleCat,
  add: handleAdd,
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
