// simple

// const fs = require("fs");
// fs.writeFileSync("apple.text", "it is fruti");

const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "files");
// for (i = 1; i < 5; i++) {
//   fs.writeFileSync(dirpath + "/hello" + i + ".txt", "a simple text file");
// }

fs.readdir(dirpath, (err, files) => {
  files.forEach((element) => {
    console.log("File Name Is ", element);
  });
});
