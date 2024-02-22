const express = require("express");
require("./config");
const product = require("./product");

const app = express();

app.use(express.json());
//post
app.post("/create", async (req, resp) => {
  let data = new product(req.body);
  let result = await data.save();
  console.log(result);
  //   console.log(req.body);
  //   resp.send("done");
  resp.send(result);
});

//get

app.get("/list", async (req, resp) => {
  let data = await product.find();

  resp.send(data);
});

//delete

app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await product.deleteOne(req.params);

  resp.send("done");
});
app.listen(4500);

//updaate

app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await product.updateOne(req.params, {
    $set: req.body,
  });

  resp.send("done");
});
