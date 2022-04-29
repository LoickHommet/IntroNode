const { Socket } = require("dgram");
const http = require("http");

const server = http.createServer((req, res) => {
  let start = performance.now()
  try {
    
    if (req.url == "/") {  
    
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Home page</h2>");
     
      // console.log(timer.stop('myTimer1'));
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1> 404 Not Found</h1>");
      
    }
  } catch (err) {
    res.writeHead(500, { "content-type": "text/html" });
    res.write("<h1> 500 Internal Server Error</h1>");
    
  }
  // ICI MIDDLEWARE A EXECUTER AVANT D'ENVOYE LA REPONSE
  res.end();
  // ICI MIDDLEWARE A EXECUTER APRES D'ENVOYE LA REPONSE
  let end = performance.now();
  console.log("requete temp :", end - start)
});


server.listen(3000);

console.log("server ecoute");

