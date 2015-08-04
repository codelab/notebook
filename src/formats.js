// formats.js
//

var codelab = {
  id: 'codelab',
  extension: '.nb',
  name: 'CodeLab Notebook',
  getFormatter: function() {
    return require('./codelab/format');
  }
};

var ipynb = {
  id: 'ipynb',
  extension: '.ipynb',
  name: 'IPython/Jupyter Notebook',
  getFormatter: function() {
    return require('./ipynb/format');
  }
};

module.exports = {
  default: codelab,
  codeLab: codelab,
  ipynb: ipynb
};

