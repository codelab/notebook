// index.js
//

var formats = require('./formats');
var loader = require('./loader');

module.exports = {
  formats: formats,
  fromFile: loader.fromFile,
  fromString: loader.fromString,
  fromStream: loader.fromStream
};

