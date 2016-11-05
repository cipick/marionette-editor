module.exports = Marionette.AppRouter.extend({
  controller: require('../controllers/preview'),

  appRoutes: {
    '<preview/:path': 'showView',
    // '<route/:path': 'someMethod'
  }
});