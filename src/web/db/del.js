module.exports = (req, res, db) => {
  if (req.method === 'DELETE') {
    req.on('data', async chunk => {
      const Body = JSON.parse(chunk);
      if (Body) {
        const key = Body.key;
        if (key) {
          const Res = db.delete(key);
          res.end(JSON.stringify({ deleted: true }));
        } else {
          res.end(JSON.stringify({ deleted: false, reason: 'key does not exist.' }));
        }
      }
    });
  } else {
    res.end(JSON.stringify({ err: 'method not allowed' }));
  }
}