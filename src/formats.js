// formats.js
//

var codelab = {
  extension: '.nb',
  name: 'CodeLab Notebook',
  getFormatter: function() {
    return require('./codelab/format');
  }
};

var ipynb = {
  extension: '.ipynb',
  name: 'IPython/Jupyter Notebook',
  getFormatter: function() {
    return require('./ipynb/format');
  }
};

module.exports = {
  CodeLab: codelab,
  IPython: ipynb
};

