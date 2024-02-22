const dbConnect = require("./mongodb");

// dbConnect().then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });
// console.log(dbConnect());

const main = async () => {
  let data = await dbConnect();
  data = await data.find({ name: "mxxx" }).toArray(); //find({ name: "jio" })
  console.log(data);
};
main();
