const express = require('express')
const app = express() //변수 초기화

app.get('/', function (req, res) {
  res.send('Hello World') //send = http에 대한 body
})

app.listen(3000, function () {
  console.log('Listening: http://localhost:3000');
});
