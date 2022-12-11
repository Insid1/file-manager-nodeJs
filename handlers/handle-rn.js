import {rename as fsRename} from "node:fs/promises";
import * as path from "path";

export default async function handleRn(args) {
  const src = path.join(process.cwd(), args[0]);
  const dest = path.join(process.cwd(), args[1]);

  await fsRename(src, dest)
}
