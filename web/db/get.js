module.exports = (req, res, db) => {

  if (req.method === 'GET') {
    req.on('data', async chunk => {
      const Body = JSON.parse(chunk);
      if (Body) {
        const key = Body.key;
        if (key) {
          const Res = db.get(key);
          res.end(JSON.stringify({ value: Res }));
        } else {
          res.end(JSON.stringify({ value: null }));
        }
      }
    });
  } else {
    res.end(JSON.stringify({ err: 'method not allowed' }));
  }
}