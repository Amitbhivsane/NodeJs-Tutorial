const mysql = require("mysql");
const Connection = require("mysql/lib/Connection");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

con.connect(
  (ere = {
    if(err) {
      console.log("error in connection");
    },
  })
);

module.exports = con;
