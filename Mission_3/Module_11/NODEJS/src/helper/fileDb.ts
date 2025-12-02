import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "../NODEJS/src/data/users.json");

export function readFiles() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function writeFile(users: any[]) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}