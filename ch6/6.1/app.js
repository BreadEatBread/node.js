const express = require('express');

const port = process.env.PORT || 8081;

const app = express();

app.get('/',(req,res) => {
    res.send('<h1>Hello, Express</h1>');
})
.listen(port, () => {
    console.log(`http://localhost:${port} 서버 대기중`);
});
