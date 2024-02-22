const app = require("./app");

console.log("Amit");
console.log("all app  file", app); //all the value
console.log("x value only", app.x); //value of x
console.log(app.z()); //function call

const arr = [2, 5, 4, 85, 4, 5, 2, 5];
let result = arr.filter((item) => {
  return item < 5;
});
console.log(result);
