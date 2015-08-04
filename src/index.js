// index.js
//

var formats = require('./formats'),
    loader = require('./loader'),
    notebook = require('./notebook');

/**
 * Create a new, empty notebook.
 */
function createNotebook() {
  return notebook.create();
}

/**
 * Load a notebook from the specified source, using the optional format.
 * The source can be a path, or a stream, buffer or string containing the
 * content.
 */
function loadNotebook(source, format, cb) {
  return notebook.load(source, format, cb);
}

module.exports = {
  formats: {
    default: formats.default.id,
    codelab: formats.codelab.id,
    ipynb: formats.ipynb.id
  },
  create: createNotebook,
  load: loadNotebook
};

