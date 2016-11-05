var FoldersView = require('../views/folders');
var File = require('../models/file');

module.exports = {
	getView: function(filesCollection){
    foldersView = new FoldersView({collection: filesCollection});
    
    return foldersView;
  }
}

