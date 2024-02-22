const express = require("express");
const Path = require("path"); //access folder

const app = express();
const publicPath = Path.join(__dirname, "public");

app.use(express.static(publicPath)); //static conten loda

app.listen(4500);
//about.html
