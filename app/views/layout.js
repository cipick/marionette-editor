var LayoutView = Marionette.View.extend({
  el: '#app',
  template: require('../templates/layout.hbs'),
  regions: {
    'sidebar': '#sidebar'
  }
})

module.exports = LayoutView;
