const { application } = require("express");
const express = require("express");
const Path = require("path"); //access folder

const app = express();
const publicPath = Path.join(__dirname, "public");
/*Template enggine*/
app.set("view engine", "ejs");

app.get("/profile", (req, resp) => {
  const user = {
    name: "amit",
    mob: "25555",
    city: "pune",
    email: "amitbhivsane@gmail.com",
    skills: ["php", "c#", "java", "nodejs", "anroid"],
  };
  resp.render("profile", { user });
});
app.get("/login", (req, resp) => {
  resp.render("login");
});

app.get("", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (req, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});
app.get("/help", (req, resp) => {
  resp.sendFile(`${publicPath}/help.html`);
});

app.get("*", (req, resp) => {
  resp.sendFile(`${publicPath}/nopage.html`);
});

app.listen(4500);
