var Rollup = require('broccoli-rollup');
var NodeResolve = require('rollup-plugin-node-resolve');

var src = "src";

var web = new Rollup(src, {
  "inputFiles": ["*.js"],
  "rollup": {
    "entry": "index.js",
    "format": "iife",
    "dest": "hackrva.js",
    "plugins": [
      NodeResolve({
        "jsnext": true,
        "main": true
      })
    ]
  }
});

module.exports = web;

