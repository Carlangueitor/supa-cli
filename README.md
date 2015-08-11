supa-cli
========

A CLI for your node app.


## Usage

Import supa-cli, make your app's bootstrap (db connection, config load, etc), and pass the objects that you want to make aviable in your cli, e.g:

```javascript
var db = require('./lib/db');
var models = require('./lib/models');
var Supa = require('supa-cli');


db.connect();

var cli = new Supa({
  prompt: "MyApp CLI > ",
  load: {
    MyModel: models.MyModel
  }
});

cli.run();
```
