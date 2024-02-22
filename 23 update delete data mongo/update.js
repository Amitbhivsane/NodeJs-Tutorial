const dbConnect = require("./mongodb");
const updateDate = async () => {
  let data = await dbConnect();
  let result = await data.updateMany(
    //updateone
    { name: "amit bhivsane" },
    {
      $set: { name: "amit bhivsane", price: 999 },
    }
  );
  console.log(result);
};

updateDate();
