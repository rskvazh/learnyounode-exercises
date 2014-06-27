var fs = require('fs');
var path = require('path');

var dir = process.argv[2],
    ext = "." + process.argv[3].toLowerCase();

fs.readdir(dir, function onRead(err, list) {
  list.forEach(function onList(filename) {
    if (ext === path.extname(filename).toLowerCase()) {
      console.log(filename);
    }
  });
});
