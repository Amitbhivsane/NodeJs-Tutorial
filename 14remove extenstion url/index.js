const express = require("express");
const Path = require("path"); //access folder

const app = express();
const publicPath = Path.join(__dirname, "public");

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
