const express = require('express');
const path = require('path');

const app=express();
app.set('port', process.env.PORT||3000);

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen(app.get('port'), ()=> {
    let port = app.get('port');
    console.log(`http://localhost:${port} 서버 대기중`);
});
