module.exports = function(uri){
	return uri.replace(new RegExp('/', "g"), '>');
}