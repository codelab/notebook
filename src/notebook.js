// notebook.js
//

var fs = require('fs'),
    path = require('path'),
    uuid = require('node-uuid');
var formats = require('./formats');

function Notebook(content, path, format) {
  this._content = content;
  this._source = {
    path: path,
    format: format
  };
}

Notebook.prototype.save = function(target, format, cb) {
}

Notebook.prototype.toString = function() {
  return JSON.stringify(this._content, null, 2);
}

/**
 * Creates an empty notebook.
 */
Notebook.create = function() {
  var defaultContent = {
    title: 'Notebook',
    id: uuid.v4(),
    metadata: {
    },
    cells: [
      {
        id: uuid.v4(),
        type: 'markdown',
        metadata: {
        },
        input: '# Header',
      },
      {
        id: uuid.v4(),
        type: 'code',
        metadata: {
        },
        input: '',
        outputs: [
        ]
      }
    ]
  };

  return new Notebook(defaultContent,
                      /* path */ '',
                      /* format */ formats.default.id );
}

/**
 * Load a notebook from the specified source, using the optional format.
 * The source can be a path, or a stream, buffer or string containing the
 * content.
 */
Notebook.load = function(source, format, cb) {
  return new Notebook();
}

module.exports = Notebook;

