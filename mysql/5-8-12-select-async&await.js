const express = require("express");
const mysql = require("mysql2");
const app = express();

require("dotenv").config({ path: "mysql/.env" }); //yarn add dotenv

app.get("/", async (req, res) => {
  const connection = mysql
    .createConnection({
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    })
    .promise();
 
  let body = "<h1>single row</h1>";
  // let vlue = await connection.query('SELECT * FROM topic');
  // let results = value[0]; // row가 모여있는 배열 데이터
  // let fields = value[1]; // 필드정보
  let [results, fields] = await connection.query("SELECT * FROM topic WHERE id =?", [3]);
  console.log({ results, fields });
  results.forEach((row) => {
    // let title = row.title, let description = row.description
    let { title, description } = row;    
    body += `<h2>${title}</h2>`;
    body += description;
  });
  body += "<h1>multiple row</h2>";
  let [results1, fields1] = await connection.query("SELECT * FROM topic");
  console.log({results1, fields1});
  results1.forEach((row) => {
    // let title = row.title, let description = row.description
    let { title, description } = row;    
    body += `<h2>${title}</h2>`;
    body += description;
  });
  res.send(body);
});
app.listen(3333, function () {
  console.log(process.env);
  console.log("Listening: http://localhost:3333");
});
