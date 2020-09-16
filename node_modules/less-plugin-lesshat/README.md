less-plugin-lesshat
========================

Imports [Less hat](http://lesshat.com/) mixins before your custom Less code.

## lessc usage

Install..

requires Less v2.4.0

```
npm install -g less-plugin-lesshat
```

and then on the command line,

```
lessc file.less --lesshat
```


## Programmatic usage

```
var LessPluginLesshat = require('less-plugin-less'),
    LesshatPlugin = new LessPluginLesshat();
less.render(lessString, { plugins: [LesshatPlugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.
