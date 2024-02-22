// const http = require("http");
// // const { json } = require("stream/consumers");
// const data = require("./data");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "Content-Type": "applicationjson" }); //send data (req=recived data)
//     resp.write(JSON.stringify(data));
//     // resp.write(JSON.stringify({ name: "amit", contact: "57888" }));
//     resp.end();
//   })
//   .listen(4500);

const http = require("http");
const data = require("./data");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "applicationjson" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(4500);
