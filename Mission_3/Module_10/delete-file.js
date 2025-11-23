const { error } = require("console");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "temp.txt");
const filePath2 = path.join(__dirname, "temp.txt");

fs.writeFileSync(filePath, "This is a temp file", (err) => {
  if (err) {
    console.log("ERROR : ", err.message);
  }
});
console.log("Temp file created");

if (fs.existsSync(filePath)) {
  console.log("file exits!!!!!!!!!!");
  fs.unlinkSync(filePath, (err) => {
    if (err) {
      console.log("error:", err.message);
    }
  });
}
console.log("Temp file deleted");

try {
  fs.existsSync(filePath)
    ? console.log("file still exists")
    : console.log("file does not exist");
} catch (err) {
  console.log("Error:", err.message);
}

fs.writeFile(filePath2, "Temp file two", (error) => {
  if (error) {
    console.log("Error:", error.message);
  }
  fs.unlinkSync(filePath, (err) => {
    if (err) {
      console.log("Error:", err.message);
    }
  });
});
