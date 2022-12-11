import path from "path";
import {rm} from 'node:fs/promises'
import handleCp from "./handle-cp.js";

export default async function handleMv(args) {
  const src = path.join(process.cwd(), args[0]);

  await handleCp(args);
  await rm(
    src,
    {force: true}
  );
}
