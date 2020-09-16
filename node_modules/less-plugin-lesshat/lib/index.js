var getLesshatProcessor = require("./lesshat-processor"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

function LessPluginLesshat(options) {
    this.options = options;
};

LessPluginLesshat.prototype = {
    install: function(less, pluginManager) {
        var LesshatProcessor = getLesshatProcessor();
        pluginManager.addPreProcessor(new LesshatProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 4, 0]
};

module.exports = LessPluginLesshat;

