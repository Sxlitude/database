### Basic Webserver Code
```js
const http = require("http");
const port = 8000;


http.createServer(reqListner)
  .listen(port, () => {
    console.log('Listening to Port')
  });

function reqListner(req, res) {
  res.writeHead(200);
  res.end(`Webserver`);
}
```
