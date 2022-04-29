const { Socket } = require("dgram");
const http = require("http");

const server = http.createServer((req, res) => {
  try {
    
    if (req.url == "/") {  
      timer.start('myTimer1');  
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Home page</h2>");
      res.end();
      // console.log(timer.stop('myTimer1'));
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


server.listen(3000);

console.log("server ecoute");

