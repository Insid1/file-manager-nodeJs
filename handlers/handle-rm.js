import path from "path";
import {rm} from "node:fs/promises";

export default async function handleRm(args) {
  const src = path.join(process.cwd(), args[0]);

  await rm(
    src,
  );
}
