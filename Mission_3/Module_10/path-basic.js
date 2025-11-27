const path = require("path");

console.log("Current file path: \n");
console.log("Filename:", __filename);
console.log("Directory:", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/alamin/doc/nextLevel.pdf";

console.log("Analyze Path:", filePath, "\n");
console.log("Directory:", path.dirname(filePath));
console.log("Base name:", path.basename(filePath));
console.log("Extension name:", path.extname(filePath));
console.log("File name:", path.basename(filePath, path.extname(filePath)));

console.log("\n" + "-".repeat(50) + "\n");
console.log("Parse file:", path.parse(filePath));
console.log("\n" + "-".repeat(50) + "\n");
