var http = require('http');
var inspect = require('util').inspect;

var results = [];
var numFinished = 0,
    numRequests = process.argv.length - 2;;

function printResults() {
  results.forEach(function (result) {
    console.log(result);
  })
}

function getPage(index) {
  http.get(process.argv[index+2], function onGet(response) {
    var data = '';
    response.setEncoding('utf8');
    response.on('data', function onData(chunk) {
      data += chunk;
    });

    response.on('end', function onEnd() {
      numFinished++;
      results[index] = data;
      if (numRequests === numFinished) {
        printResults();
      }
    })
  });
}


for (var i = 0; i < numRequests; i++) {
  getPage(i);
}
