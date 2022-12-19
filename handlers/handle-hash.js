import {readFile} from "node:fs/promises";
import {createHash} from "node:crypto";
import * as path from "path";

export default async function handleHash(args) {
  const src = path.join(process.cwd(), args[0]);
  const hash = createHash('sha256');

  const data = await readFile(src);
  const hashedFile = hash.update(data);
  console.log(hashedFile.digest('hex'))
}
