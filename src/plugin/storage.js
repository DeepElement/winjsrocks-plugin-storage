import WinJSRocks from "winjsrocks";
import IndexDBStorage from "../provider/indexeddb-storage"

export default class extends WinJSRocks.Plugin.Base {
  constructor(application) {
    super(application);
  }

  setup(options, callback) {
    var that = this;
    return super.setup(options, function(err) {
      if (err)
        return callback(err);

      providerKey = options.storage.provider || "indexeddb";
      switch (providerKey) {
        case "indexeddb":
          that.application.builder.registerProvider("winjsrocks-local-storage", IndexDBStorage);
          break;
      }

      return callback();
    })
  }
};
