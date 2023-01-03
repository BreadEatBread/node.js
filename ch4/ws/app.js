const express = require("express");
const ws = require("ws");

const app = express();
const clients = new Set();
const port = 8888;
const wss = new ws.Server({ noServer: true });

app.use((req, res) => {
  if (req.headers.upgrad?.toLowerCase() == "websocket") {
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
  } else {
    const { nick } = req.query;
    if (nick) res.setHeader("Set-Cookie", "nick=" + nick);
    res.sendFile(`${__dirname}/chatting.html`);
  }
});
app.listen(port, () => {
  // http.creadteServer(app).listen(...)
  console.log(`http://localhost:${port} 웹소켓 서버 대기 중`);
});

function onConnect(socket) {
  clients.add(socket);
  socket.on("message", (message) => {
    message = message.toString(); // Buffer를 string으로
    clients.forEach((client) => client.send(message));
  });
  socket.on("close", () => {
    clients.delete(socket);
  });
}
