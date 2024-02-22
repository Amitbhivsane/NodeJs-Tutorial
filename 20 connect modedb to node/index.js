const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017";
const databaseName = "ecom";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  db = result.db(databaseName);
  collection = db.collection("product");
  let responce = await collection.find({}).toArray();
  console.log(responce);
}

getData();
