import path from "path";
import {createReadStream, createWriteStream} from "node:fs";

export default async function handleCp(args) {
  const src = path.join(process.cwd(), args[0]);
  const dest = path.join(process.cwd(), args[1]);

  const writeStream = createWriteStream(dest, {encoding: "utf-8"});
  const readStream = createReadStream(src, {encoding: "utf-8"});

   for await (const chunk of readStream) {
     writeStream.write(chunk);
  }
}
