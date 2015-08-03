// index.js
//

var formats = require('./formats'),
    loader = require('./loader'),
    notebook = require('./notebook');

function createNotebook() {
  return new notebook();
}

function loadNotebook(source, format, cb) {
}

module.exports = {
  formats: {
    default: formats.codelab.id,
    codelab: formats.codelab.id,
    ipynb: formats.ipynb.id
  },
  create: createNotebook,
  load: loadNotebook
};

