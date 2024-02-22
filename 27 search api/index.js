const express = require("express");
require("./config");
const product = require("./product");

const app = express();

app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  let data = await product.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
      {
        brand: { $regex: req.params.key },
      },
    ],
  });
  console.log(req.params.key);
  // resp.send("search done");
  resp.send(data);
});

app.listen(4500);
