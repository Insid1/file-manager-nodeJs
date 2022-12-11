import path from "path";
import {createReadStream, createWriteStream} from "node:fs";
import {readFile} from "node:fs/promises";
import {ERROR_MESSAGE} from "../consts/common.js";

export default async function handleCp(args) {
  const fileName = args[0].split('/').at(-1)

  const src = path.join(process.cwd(), args[0]);
  const dest = path.join(process.cwd(), args[1], fileName);

  const file = await readFile(src).catch((e) => null);
  if (file === null) {
    console.log(ERROR_MESSAGE);
    return;
  }

  const writeStream = createWriteStream(dest, {encoding: "utf-8"});
  const readStream = createReadStream(src, {encoding: "utf-8"});

   for await (const chunk of readStream) {
     writeStream.write(chunk);
  }
}
