const fs = require("fs");

fs.readFile("file-sync.txt", "utf8", (err, data) => {
  if (err) {
    console.log("File read err:", err);
  }
  console.log(data);
});
