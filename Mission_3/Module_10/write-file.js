const fs = require("fs");
const path = require("path");

const content = "This is some text \n File write example test";

// __dirname gives the current directory path "MD Al Amin Islam/Next_level_Web_Development_Batch_6/Mission_3/Module_10"
const filePath = path.join(__dirname, "file-write.txt");
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.log("Write file err:", err);
  }
  console.log("File write success.....");
});

const data = fs.readFileSync("file-write.txt", "utf8");
console.log(data)