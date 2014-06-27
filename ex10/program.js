var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
  var d = new Date();
  socket.write(strftime("%Y-%m-%d %H:%M", d));
  socket.end();
})
server.listen(Number(process.argv[2]));
