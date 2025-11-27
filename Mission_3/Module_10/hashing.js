const crypto = require("crypto");
console.log("\n MD5 Hash:");

// ! not recommended
const md5Hash = crypto.createHash("md5").update("password123").digest("hex");
console.log("input: password123", "\n", "md5 output:", md5Hash);
console.log("=".repeat(60));
const sha256Hash = crypto
  .createHash("sha512")
  .update("password123")
  .digest("hex");
console.log("input: password123", "\n", "md5 output:", sha256Hash);
