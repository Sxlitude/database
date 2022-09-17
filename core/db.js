const Cache = { keys: [] };

module.exports = {
  Cache: Cache,
  get: (key) => {
    const keys = Cache.keys;
    const getKey = keys.find(k => k.key === key);
    if (getKey) return getKey.value;
    else return null;
  },

  set: (key, value) => {
    const keys = Cache.keys;
    const k = keys.find(l => l.key === key);
    if (keys.includes(k)) {
      Cache.keys = filter(keys, k);
      Cache.keys.push({ key: key, value: value })
    } else {
      Cache.keys.push({ key: key, value: value })
    }
  },

  delete: (key) => {
    const keys = Cache.keys;
    const k = keys.find(k => k.key === key);

    if (k) {
      Cache.keys = filter(keys, k);
      return true;
    }
  }
}

function filter(arr, data) {
  const array = [];
  arr.forEach(e => {
    if (e !== data) {
      array.push(e)
    }
  }); return array;
}