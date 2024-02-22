// const http = require("http");
// http
//   .createServer((req, resp) => {
//     resp.write("<h1>Hello amit ..</h1>");
//     resp.end();
//   })
//   .listen(4500);

//or ..... normal function
// function datacontrol(req, resp) {
//   resp.write("<h1>hello java</h1>");
//   resp.end();
// }
// http.createServer(datacontrol).listen(4500);

//or arrow function
// const datacontrol = (req, resp) => {
//   resp.write("<h1>hello java........</h1>");
//   resp.end();
// };
// http.createServer(datacontrol).listen(4500);

// const dataserver = (req, resp) => {
//   resp.write("<h1>hello.my  .<h1>");
//   resp.end();
// };
// http.createServer(dataserver).listen(4500);

/** practics */

const http = require("http");
http
  .createServer((req, resp) => {
    resp.write("<h1>hello i am amit</h1>");

    resp.end();
  })
  .listen(4500);
