const net = require("net");
const server = net.createServer(function (socket) {
  // accept
  console.log("클라이언트 접속");
  socket.on("data", function (chunk) {
    console.log(chunk.toString());
    socket.write("HTTP/1.1 200 OK\n"); // Status Line
    socket.write("Content-Type: text/plain; charset=utf-8\r\n");
    socket.write("\r\n"); // End of Header
    socket.end("Welcome to Socket Server");
  });
  socket.on("end", function () {
    console.log("클라이언트 접속 종료");
  });
});
server.on("listening", function () {
  console.log("http://localhost:8081 is listening");
});
server.listen(8081); // bind port
