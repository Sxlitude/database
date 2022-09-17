const db = require('./core/db');
const http = require('http');
const port = 8000;

http.createServer(handler)
  .listen(port, () => {
    console.log('Listening to Port ' + port + '!')
  });

function handler(req, res) {
  const query = req.url;
  
  if (query === '/get') {
    require('./web/db/get')(req, res, db);
  }

  else if (query === '/set') {
    require('./web/db/set')(req, res, db);
  }

  else if (query === '/delete') {
    require('./web/db/del')(req, res, db);
  }

  else if (query === '/list') {
    require('./web/db/list')(req, res, db);
  }

  else {
    res.end(JSON.stringify({ err: 'not found' }));
  }
}
process.on('uncaughtException', (e) => {
  console.log(e.stack)
})