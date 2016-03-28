
var toc = require('markdown-toc');

window.convert = function(e){

  console.log('converting', document.getElementById('md').value, toc(document.getElementById('md').value).content);
  document.getElementById('toc').value
  =toc(document.getElementById('md').value).content
}
