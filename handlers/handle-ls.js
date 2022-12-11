import {readdir} from 'node:fs/promises';

const FileHandlerForTable = function (name, type) {
  this.Name = name;
  this.Type = type;
};

const handleSort = (a, b) => {
  if (a.Type === b.Type) {
    return a.Name > b.Name ? 1 : -1;
  } else {
    return b.Type === 'directory' ? 1 : -1;
  }
}

export default async function handleLs() {
  const {cwd} = process;
  const rawFiles = await readdir(cwd(), {withFileTypes: true});

  if (!rawFiles.length) return;

  const adaptedFiles = rawFiles
    .map((dirent) => (new FileHandlerForTable(dirent.name, dirent.isFile() ? 'file' : 'directory')))
    .sort(handleSort)

  console.table(adaptedFiles);
}
