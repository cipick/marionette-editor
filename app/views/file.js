module.exports = Marionette.View.extend({
  tagName: 'li',
  className: 'collapsible-header',
  template: require('../templates/file.hbs'),

  ui: {
  	tooltip: '[data-ui="tooltip"]'
  }
});
