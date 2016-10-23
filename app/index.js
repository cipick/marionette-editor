require('./index.scss');

$(document).ready(function(){

  var Files = require('./collections/files');
  var filesCollection = new Files();

  filesCollection.fetch().done(function(){
    var LayoutController = require('./controllers/layout');
    LayoutController.render(filesCollection);
  })
});
