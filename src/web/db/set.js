module.exports = (req, res, db) => {

  if (req.method === 'POST') {
    req.on('data', async chunk => {
      const Body = JSON.parse(chunk);
      if (Body) {
        const key = Body.key;
        const value = Body.value;

        if (key && value) {
          db.set(key, value);
          res.end(JSON.stringify({ key: key, value: value, done: true }));
        } else {
          res.end(JSON.stringify({ err: 'key or value was not provided' }));
        }
      }
    });
  } else {
    res.end(JSON.stringify({ err: 'method not allowed' }));
  }
}