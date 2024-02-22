const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/ecom");

const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});

//saveinDb();

const saveinDb = async () => {
  const ProductsModel = mongoose.model("product", ProductSchema);
  let data = new ProductsModel({
    name: "math",
    brand: "-amit",
    price: 14,
  });
  let result = await data.save();
  console.log(result);
};
//updatinDB();

const updatinDB = async () => {
  const ProductsModel = mongoose.model("product", ProductSchema);
  let data = await ProductsModel.updateOne(
    {
      name: "maharahtra-211",
    },
    {
      $set: { price: 12345688, brand: "amul" },
    }
  );
  console.log(data);
};
//deleteinDB();

const deleteinDB = async () => {
  const ProductsModel = mongoose.model("product", ProductSchema);
  let data = await ProductsModel.deleteOne({
    name: "maharahtra-211",
  });
  console.log(data);
};
//find db
const findinDB = async () => {
  const ProductsModel = mongoose.model("product", ProductSchema);
  let data = await ProductsModel.find({
    name: "maharahtra-211",
  });

  console.log(data);
};
findinDB();
