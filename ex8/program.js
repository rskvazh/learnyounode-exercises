var http = require('http');

http.get(process.argv[2], function (response) {

  var data = '';
  response.setEncoding('utf8');
  response.on('data', function onData(chunk) {
    data += chunk;
  });

  response.on('end', function onEnd() {
    console.log(data.length);
    console.log(data);
  })
})
