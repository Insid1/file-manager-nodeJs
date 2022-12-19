import path from "path";
import {createReadStream, createWriteStream} from "node:fs";
import {createBrotliCompress} from "node:zlib";
import {pipeline} from "node:stream/promises";

export default async function (args) {
  const fileName = args[0].split('/').at(-1)


  const src = path.join(process.cwd(), args[0]);
  const dest = path.join(process.cwd(), args[1],`${fileName}.br`);

  const readStream = createReadStream(src);
  const gzip = createBrotliCompress();
  const writeStream = createWriteStream(dest);

  await pipeline(readStream, gzip, writeStream)
}
