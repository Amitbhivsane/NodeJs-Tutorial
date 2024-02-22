// const express = require("express");
// const dbConnect = require("./mongodb");
// const app = express();

// app.get("/", async (req, resp) => {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   console.log(data);
//   resp.send(data);
// });

// app.listen(4500);

// or
const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const app = express();

app.use(express.json()); //used for access data from postman

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  resp.send(data);
});

//used for save(insert) data using  postman save to database
app.post("/", async (req, resp) => {
  console.log(req.body);
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result); // check post req resp.send({name:"amit "})

  //resp.send({ name: "amit123" }); // test postman
});

//update
app.put("/", async (req, resp) => {
  // console.log(req.body);postman to vs code
  let data = await dbConnect();
  let result = data.updateOne(
    { name: "amit bhivsane..." },
    { $set: { price: 555555555 } }
  );

  resp.send({ result: "updated" }); //check on off
});

//delete data
app.delete("/:id", async (req, resp) => {
  console.log(req.params.id);

  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });

  // resp.send("done");
  resp.send(result);
});

app.listen(4500);
