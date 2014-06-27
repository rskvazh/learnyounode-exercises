var dirfilter = require('./dirfilter');

function onFiltered(err, list) {
  if (err) {
    return console.log(err);
  }

  list.forEach(function (file) {
    console.log(file);
  })
}

dirfilter(process.argv[2], process.argv[3], onFiltered);
