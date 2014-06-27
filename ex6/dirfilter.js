var fs = require('fs');
var path = require('path');

function dirFilter(dir, ext, callback) {
  ext = "." + ext.toLowerCase();

  fs.readdir(dir, function onRead(err, list) {
    if (err) {
      return callback(err);
    }

    list = list.filter(function (file) {
      return ext === path.extname(file).toLowerCase();
    });

    callback(null, list);
  });
}

module.exports = dirFilter;
