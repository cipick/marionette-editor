var LayoutView = Marionette.View.extend({
  el: '#app',
  template: require('../templates/layout.hbs'),
  regions: {
    'search': '[data-region="search"]',
    'menu': '[data-region="menu"]',
    'main': '[data-region="main"]',
  }
})

module.exports = LayoutView;
