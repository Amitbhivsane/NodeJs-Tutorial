const express = require("express");
const app = express();

//middelware
const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("please provide age");
  } else if (req.query.age < 18) {
    resp.send("you can not access this page");
  } else {
    next();
  }
};
app.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("welcome to home page");
});

app.get("/user", (req, resp) => {
  resp.send("welcome to user page");
});

app.listen(4500);
