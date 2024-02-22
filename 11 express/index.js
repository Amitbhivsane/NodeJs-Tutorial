const express = require("express");
const app = express();

app.get("", (req, resp) => {
  console.log("data send by browser ", req.query.name); //browser send datahttp://localhost:4500/?name=amit
  resp.send("Welcome Home Page..." + req.query.name);
});

app.get("/about", (req, resp) => {
  resp.send("Welcome about Page...");
});

app.get("/help", (req, resp) => {
  resp.send("Welcome Help Page...");
});
app.listen(4500);

app.get("/contact", (req, resp) => {
  resp.send("Welcome contact Page....");
});
