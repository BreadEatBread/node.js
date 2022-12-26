const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    res.end(fs.readFileSync("./cookie-client.html"));
  })
  .listen(8083, () => {
    console.log("http://localhost:8083 서버 대기 중");
  });
