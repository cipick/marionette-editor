module.exports = {
  render: function(filesCollection){
    var LayoutView = require('../views/layout')
    var layoutView = new LayoutView();

    layoutView.on('render', function(){
      foldersController = require('./folders');
      searchController = require('./search');
      codeMirrorController = require('./codemirror');

      if(this.getRegion('menu')){
        this.getRegion('menu').show(foldersController.getView(filesCollection));
        window.$('.collapsible').collapsible();
      }

      if(this.getRegion('search')){
        this.getRegion('search').show(searchController.getView(filesCollection));
      }

      if(this.getRegion('main')){
        this.getRegion('main').show(codeMirrorController.getView(filesCollection));
      }
    })

    layoutView.render();
  }
}