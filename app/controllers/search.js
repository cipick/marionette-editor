var SearchView = require('../views/search');

module.exports = {
	getView: function(filesCollection){
    searchView = new SearchView();

    searchView.on('handle:change:input', search)

  	function search(query){
  		if(query.length < 1){
  			searchView.triggerMethod('show:results', [])
  			return false;
  		}

    	var results = filesCollection.filter(function(file){
    		return file.get('name').indexOf(query) > -1
    	});

    	resultsJSON = results.map(function(file){
    		return file.toJSON()
    	});

    	searchView.triggerMethod('show:results', resultsJSON)
  	}

    return searchView;
  }
}