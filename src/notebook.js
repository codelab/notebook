// notebook.js
//

function createEmptyNotebookContent() {
  return {
  };
}

function Notebook(content, path, format) {
  this._content = content || createEmptyNotebookContent();
  this._source = {
    path: path || '',
    format: format || null
  };
}

Notebook.prototype.save = function(target, format, cb) {
}

Notebook.prototype.toString = function() {
  return JSON.stringify(this._content, null, 2);
}

module.exports = Notebook;

