const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, "content-Type : text/html");
  res.end("<h1>Hello Node!!!!</h1>\n");
});
server.listen(3000, "localhost", () => {
  console.log("you reached http://localhost:3000");
});
