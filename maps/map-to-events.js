import {
  handleAdd, handleCat,
  handleCd, handleCp,
  handleLs, handleMv,
  handleOs, handleRm,
  handleRn, handleUp,
  handleHash, handleCompress,
  handleDecompress,
} from "../handlers/index.js";

const mapToEvents = {
  up: handleUp,
  cd: handleCd,
  ls: handleLs,
  cat: handleCat,
  add: handleAdd,
  rn: handleRn,
  cp: handleCp,
  mv: handleMv,
  rm: handleRm,
  os: handleOs,
  hash: handleHash,
  compress: handleCompress,
  decompress: handleDecompress,
}

export default mapToEvents;
