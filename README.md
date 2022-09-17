# My Own Database
- currently it uses caching only
- it can be used without auth key yet
- it's still in development
> :warning: This project is made for experiments and testing; and it's not meant to be used on personal projects as i'm still learning about http module. For now, just use it for fun!


## How to use it?
### First Project (or Repl)
Yes, you can run this code on [repl.it](https://replit.com) too! Infact this project was also made on replit. Follow these steps to create your own webserver for database:

- Import this code and run it; a webserver will be created.
- Copy the webserver URL as we're going to use it later.
- Make a new project with any language you like (keep the webserver on)


### Second Project (or Repl)
Now it's time to work on the second repl. Keep it in any language you want; but I'm gonna use Node.js for example. As an http client, I'm using [phin](https://github.com/ethanent/phin).

##### Initial Code
- Import the phin library
```js
const phin = require('phin');
```
I'm going to use `webserver_url` for the reference of the webserver URL in the upcoming code snippets. Replace that with that of yours. 
- Make an async function
```js
async function Database () {}
```
We are going to write some code inside this function. In the code snippets below I've repeated same variable name; but you can edit it if you are going to put all code at once.
- Set a key to a value
```js
const response = await phin({
  method: 'POST',
  url: 'webserver_url/set',
  parse: 'json',
  data: {
    key: 'guild_83726472',
    value: 6000
  }
})
```
The above code assigns a value to a key. The key can be in the form of `string`. If we talk about value, you can put *strings*, *booleans* as well as *objects* ! We have set our key successfully. Let's fetch its value now! Wondering what response contains? log it and find out! (Main respose is in `response.body`)
- Get a key's value
```js
const response = await phin({
  method: 'GET',
  url: 'webserver_url/get',
  parse: 'json',
  data: {
    key: 'guild_83726472'
  }
}); console.log(response.body.value) // -> 6000
```
The above code gets value of a key. If you provide an invalid key (means if you didn't assign a value to the key), the response body will return the value as `null` !

- Delete a key
```js
const response = await phin({
  method: 'DELETE',
  parse: 'json',
  url: 'https://httpServer.grvcdz.repl.co/delete',
  data: {
    key: 'guild_83726472'
  }
}); console.log(response.body.deleted) // -> true
```
You can check whether a key is deleted or not by the response body's deleted property. If it is `true`, then the task is done !

- Code So Far
```js
const phin = require('phin');

async function Database () {

  /* Set a key to a value */
  const setkey = await phin({
    method: 'POST',
    url: 'webserver_url/set',
    parse: 'json',
    data: {
      key: 'guild_83726472',
      value: 6000
    }
  });

  /* Get a key's value */
  const response = await phin({
    method: 'GET',
    url: 'webserver_url/get',
    parse: 'json',
    data: {
      key: 'guild_83726472'
    }
  }); 
  const value = response.body.value;
  console.log(value); // -> 6000

  /* Delete a key */
  const response = await phin({
    method: 'DELETE',
    parse: 'json',
    url: 'https://httpServer.grvcdz.repl.co/delete',
    data: {
      key: 'guild_83726472'
    }
  }); 
  const deleted = response.body.deleted;
  if (deleted) console.log('deleted!');
}
```

### Contribution
If you think a feature is broken; or if you want me to add some features, you can open an issue! Make sure to star this repo if you liked my work. Well, I use discord too. If you wanna contact me, you can dm me aka **Sxlitude#8885** !