import * as fs from "fs/promises";
import * as path from "path";

export default async function handleAdd(args) {
  const dest = path.join(process.cwd(), ...args);
  console.log(dest)

  await (await fs.open(dest, 'a')).close();
}
