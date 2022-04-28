const fs = require('fs');
const path = require('path');


const text = fs.readFileSync('assets/index.html', {encoding: "utf-8"})
const ecrire = path.join(text);
const textLog = fs.readFileSync('src/log.txt', {encoding: "utf-8"})
const ecrireLog = path.join(textLog);
// console.log(textLog)
console.log(ecrire)
console.log(ecrireLog)
