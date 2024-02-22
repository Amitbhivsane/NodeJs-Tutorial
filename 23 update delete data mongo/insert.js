// const dbConnect = require("./mongodb");
// singnal data
// const insertData = async () => {
//   let data = await dbConnect();
//   let result = await data.insertOne({
//     name: "mic-apple 7",
//     brand: "apple",
//     price: 14288,
//   });
//   if (result.acknowledged) {
//     console.warn("data is inserted");
//   }
// };

// insertData();

// multiple data array

const dbConnect = require("./mongodb");

const insertData = async () => {
  let data = await dbConnect();
  let result = await data.insertMany([
    { name: "mic-apple 11", brand: "vivo", price: 14288 },
    { name: "mic-apple 11", brand: "apple", price: 14288 },
    { name: "mic-apple 11", brand: "mac", price: 14288 },
    { name: "mic-apple 11", brand: "micromax", price: 14288 },
  ]);
  if (result.acknowledged) {
    console.warn("data is inserted");
  }
};

insertData();
