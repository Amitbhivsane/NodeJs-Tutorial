const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/orange.txt`;
//  creat and write file
// fs.writeFileSync(filePath, "this is simple text file");

/*Read File*/

// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });

// update file

// fs.appendFile(filePath, " and file name is orange. ..... ", (err) => {
//   if (!err) console.log("File Upadted..");
// });

//Rename file operation

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) console.log("File Upadted..");
// });

//delet file
// fs.unlinkSync(`${dirPath}/fruit.txt`);
