const fs = require('fs');
const path = require('path');


const text = fs.readFileSync('assets/index.html', {encoding: "utf-8"})
console.log(text)