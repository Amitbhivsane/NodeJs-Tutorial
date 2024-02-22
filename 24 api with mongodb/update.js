const dbConnect = require("./mongodb");

const updateDate = async () => {
  let data = await dbConnect();
  let result = await data.updateMany(
    //one
    { name: "mic-apple 11" },
    {
      $set: { name: "ashok app", price: 111 },
    }
  );
  console.log(result);
};

updateDate();
