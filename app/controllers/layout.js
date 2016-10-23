module.exports = {
  render: function(filesCollection){
    var LayoutView = require('../views/layout')
    var layoutView = new LayoutView();

    layoutView.on('render', function(){
      foldersController = require('./folders.js');
      searchController = require('./search.js');

      if(this.getRegion('menu')){
        this.getRegion('menu').show(foldersController.getView(filesCollection));
        window.$('.collapsible').collapsible();
      }

      if(this.getRegion('search')){
        this.getRegion('search').show(searchController.getView(filesCollection));
      }
    })

    layoutView.render();
  }
}