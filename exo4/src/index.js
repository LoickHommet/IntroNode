const fs = require('fs');
const path = require('path');

// parti 1

const chemainAbsoluIndexHTml = path.join(__dirname,'../assets/index.html');
const chemainAbsoluIndexLog = path.join(__dirname, 'log.txt');
console.log(chemainAbsoluIndexHTml);
console.log(chemainAbsoluIndexLog);

 // process.exit(1)  // debut la parti  1

// parti 2

const letureHtml = fs.readFileSync(chemainAbsoluIndexHTml, "utf-8");
const letureLog = fs.readFileSync(chemainAbsoluIndexLog, "utf-8");
console.log(letureHtml)
console.log(letureLog)

