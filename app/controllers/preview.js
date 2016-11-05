var Radio = require('backbone.radio');
var previewChannel = Radio.channel('preview'); 

module.exports = {
	showView: function(path){
		var URI = path.replace(new RegExp('>', "g"), '/');

		console.log(URI)
		var File = require('../models/file');
		var file = new File({path: URI});

		file.fetch().done(function(){
			previewChannel.trigger('load:data', file);
		})
	}
}