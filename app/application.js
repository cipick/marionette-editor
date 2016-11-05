var Router = require('./routers/router');
var LayoutController = require('./controllers/layout');
// var AnotherController = require('./controllers/another');

var App = new Marionette.Application();

App.on('start', function(APP, filesCollection) {
  Backbone.history.start();

  var router = new Router();

  LayoutController.render(filesCollection);
});

module.exports = App;