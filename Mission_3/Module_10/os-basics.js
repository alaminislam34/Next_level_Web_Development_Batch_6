const os = require("os");
console.log("-".repeat(50));
console.log("System Details:");
console.log("Platform: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("OS type: ", os.type());
console.log("OS Release: ", os.release());
console.log("Hostname:", os.hostname());

console.log("\nCPU Info:");
const cpus = os.cpus();
console.log("CPU Model:", cpus[0].model);
console.log("Number of cores:", cpus.length);
console.log("OS Speed:", cpus[0].speed);

const totalMem = os.totalmem();
const freeMem = os.freemem();

console.log("Total Memory:", (totalMem/1024/1024/1024).toFixed(2), "GB");
console.log("Free Memory:", (freeMem/1024/1024/1024).toFixed(2), "GB");


console.log("-".repeat(60))

const uptime = os.uptime();
const days = Math.floor(uptime/86400);
const hours = Math.floor((uptime%86400)/3600);
const minutes = Math.floor((uptime%3600)/60);
console.log(days, "days", hours, 'hours', minutes, 'minutes')