// const mysql = require("mysql");
// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "test",
// });

// con.connect((err) => {
//   if (err) {
//     console.log("erroe");
//   } else {
//     console.log("connected");
//   }
// });

const express = require("express");
const app = express();
const con = require("./config");
app.get("/", (req, resp) => {
  // resp.send("route done");
});

app.listen(4500);
