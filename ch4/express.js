const express = require("express");

express()
  .get("./", (req, res) => {
    res.write("<h1>Hello Node!</h1>");
    res.write("<p>Hello Server!</p>");
  })
  .listen(8080, () => {
    console.log("http://localhost:8080 서버 대기 중입니다!");
  });
