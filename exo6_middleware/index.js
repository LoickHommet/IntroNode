const { Socket } = require("dgram");
const http = require("http");

const server = http.createServer((req, res) => {
  try {
      // DEBUT MIDDLEWARE D'INTERCEPTION
      console.log(req.httpVersion, req.url, req.method)
    if (req.url == "/") {
    //   console.loge("yee"); // error test
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Home page</h2>");
      res.end();
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1> 404 Not Found</h1>");
      res.end();
    }
  } catch (err) {
    res.writeHead(500, { "content-type": "text/html" });
    res.write("<h1> 500 Internal Server Error</h1>");
    res.end();
  }
});

// const server = http.createServer();

// server.on('connection', (socket) => {
//     console.log(socket)
// });

server.listen(3000);

console.log("server ecoute");

// curl -v localhost:3000
