module.exports = {
	getView: function(filesCollection){
    var CodeMirrorView = require('../views/codemirror');
    codeMirrorView = new CodeMirrorView();
    return codeMirrorView;
  }
}