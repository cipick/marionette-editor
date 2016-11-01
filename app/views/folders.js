module.exports = Marionette.CollectionView.extend({
  className: 'collapsible collapsible-accordion',
  tagName: 'ul',
	childView: require('./folder')
});

