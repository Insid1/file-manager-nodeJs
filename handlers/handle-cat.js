import {createReadStream} from "node:fs";
import * as path from "path";

export default async function handleCat(args) {
  const {cwd} = process;
  const src = path.join(cwd(), ...args)

  const srcStream = createReadStream(src)

  for await (const chunk of srcStream) {
    console.log(chunk.toString());
  }
}
