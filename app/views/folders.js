var Folders = Marionette.CollectionView.extend({
  className: 'collapsible collapsible-accordion',
  tagName: 'ul',
	childView: require('./folder'),
  onRender: function(){
  	console.log(this)
  }
});

module.exports = Folders;
