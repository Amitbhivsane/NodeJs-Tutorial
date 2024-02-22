const express = require("express");
const reqFilter = require("./middelware");
const app = express();
const route = express.route;

//middelware
// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("please provide age");
//   } else if (req.query.age < 18) {
//     resp.send("you can not access this page");
//   } else {
//     next();
//   }
// };
app.use(reqFilter);

route.use(reqFilter);
app.get("/", reqFilter, (req, resp) => {
  resp.send("welcome to home page");
});

app.get("/user", (req, resp) => {
  resp.send("welcome to user page");
});

app.route("/contact", (req, resp) => {
  resp.send("welcome to contact page");
});

app.route("/about", (req, resp) => {
  resp.send("welcome to about page");
});

app.use("/", route);
app.listen(4500);
