var fs = require('fs');
var fileName = process.argv[2];

if (!fileName) {
  throw new Error('Filename must be provided in cli argument');
}

var numN = fs.readFileSync(fileName, 'utf8').split('\n').length-1;
console.log(numN);
