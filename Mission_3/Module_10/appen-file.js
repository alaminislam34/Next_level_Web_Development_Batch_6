const fs = require("fs");
const path = require("path");
const pathFile = path.join(__dirname, "appen.log");
// fs.writeFile(pathFile, "Application Started", (err)=>{
//     if(err){
//         console.log('Err')
//     }
// });
// console.log('Write file')

fs.appendFile('appen.log', '\nMy log in success\n', (err)=>{
    if(err){
        console.log(err.message)
    }
} )

fs.appendFile("appen.log", `\n${new Date().toISOString()} - User logged in\n`, (err)=> {
    if(err){
        console.log(err)
    }
})
console.log('File append success')

