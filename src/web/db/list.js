module.exports = (req, res, db) => {
  if (req.method === 'GET') {
    req.on('data', async chunk => {
      const Body = JSON.parse(chunk);
      if (Body) {
        const prefix = Body.prefix;
        const pref = Body.showKeys || true;

        
        if (prefix) {
          const Res = db.list(prefix, pref);
          res.end(JSON.stringify({ result: Res }));
        } else {
          res.end(JSON.stringify({ result: [] }));
        }
      }
    });
  } else {
    res.end(JSON.stringify({ err: 'method not allowed' }));
  }
}