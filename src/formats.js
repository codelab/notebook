// formats.js
//

var codelab = require('./codelab/format'),
    ipynb = require('./ipynb/format');

module.exports = {
  CodeLab: { extension: '.nb', formatter: codelab },
  IPython: { extension: '.ipynb', formatter: ipynb }
};

