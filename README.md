# winjsrocks-plugin-storage

Contains storage related plugnis for the [WinJSRocks](http://winjs.rocks) MVVM Framework for WinJS apps.

# Activation
To activate, import the plugin project from npm:

``` javascript
npm install winjsrocks-plugin-storage
```

Then, register in the `WinJSRocks.Application.Instance.configure` options within the `plugins` array:

``` javascript
var WinJSRocks = require('winjsrocks');
var WinJSRocksPluginStorage = require('winjsrocks-plugin-storage');
var app = new WinJSRocks.Application();
app.configure({
    plugins:[
      WinJSRocksPluginStorage // Provide the Class Definition of the Plugin
    ]
  },
  function(err){
  });
```

# Switching Storage Provider
By default, the indexedDB storage provider is configured. To change this option, set the provider strategy in the app.configure call:

``` javascript
...
app.configure({
    plugins:[
      WinJSRocksPluginStorage // Provide the Class Definition of the Plugin
    ],
    storage: {
      provider: "indexeddb"
    }
  },
  function(err){
  });
```
> TBD: Only indexedDB is implemented but others can be added by submitting a request at https://github.com/DeepElement/winjsrocks/issues
