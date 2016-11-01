module.exports = Marionette.View.extend({
  tagName: 'li',
  
  template: require('../templates/folder.hbs'),

  regions: {
    body: '[data-region="body"]'
  },

  onRender: function(){
    var filesCollection = new Backbone.Collection(this.model.get('children'))

    var FilesView = require('./files');
    filesView = new FilesView({collection: filesCollection});

    this.getRegion('body').show(filesView);

    setTimeout(function(){
      $('.collapsible').collapsible();
    }, 1000);
  },

  events: {
    'click': 'eventActionClick',
    'click [data-action="add"]': 'eventActionClickAdd'
  },

  eventActionClick: function(ev){
    if($(ev.target).closest('.collapsible-body').length === 0){
      if(this.model.has('children')){
        ev.preventDefault();
      }
    }
  },

  eventActionClickAdd: function(ev){
    ev.stopPropagation();
    ev.preventDefault();

    console.log('add');
  }
});

