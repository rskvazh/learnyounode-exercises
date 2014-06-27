var fs = require('fs');
var fileName = process.argv[2];

if (!fileName) {
  throw new Error('Filename must be provided in cli argument');
}

var numN = fs.readFile(fileName, 'utf8', function onRead(err, data) {
  console.log(data.split('\n').length-1);
});
