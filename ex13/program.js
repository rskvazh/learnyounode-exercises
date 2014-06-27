var http = require('http');
var url = require('url');

var server = http.createServer(function (req, resp) {
  var r = url.parse(req.url, true);
  var d = new Date(r.query.iso);
  var result = {};
  if (r.pathname === '/api/parsetime') {
    result = {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  } else if (r.pathname === '/api/unixtime') {
    result = {
      unixtime: d.getTime()
    }
  }

  resp.writeHead(200, { 'Content-Type': 'application/json' });
  resp.end(JSON.stringify(result));
})
server.listen(Number(process.argv[2]));
