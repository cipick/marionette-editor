module.exports = {
  render: function(filesCollection){
    var LayoutView = require('../views/layout')
    var layoutView = new LayoutView();

    layoutView.on('render', function(){
      foldersController = require('./folders.js');

      if(this.getRegion('sidebar')){
        this.getRegion('sidebar').show(foldersController.getView(filesCollection));
        window.$('.collapsible').collapsible();
      }
    })

    layoutView.render();
  }
}