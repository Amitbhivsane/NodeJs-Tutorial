const express = require("express");
const app = express();

app.get("", (req, resp) => {
  resp.send(`<h1>welcome amit bhivsane..</h1> <a href="/about">about</a>`); //render html
});
/*//query parameter ?name=amit*/
app.get("/about", (req, resp) => {
  resp.send(`<input type="text" placeholder="user Name" value="${req.query.name}"/> 
  <button>click me</button>
  <a href="/">home</a>
  `); //html
});

app.get("/help", (req, resp) => {
  //json data
  resp.send([
    {
      name: "amit",
      email: "amitbhivsane@gmail.com", //jsondata
    },
    {
      name: "swapnil",
      email: "swapniltbhivsane@gmail.com",
    },
  ]); //render html
});
app.listen(4500);
