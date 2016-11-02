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

    $.contextMenu({
      // define which elements trigger this menu 
      selector: "body",
      // define the elements of the menu 
      items: {
          foo: {name: "Foo", callback: function(key, opt){ alert("Foo!"); }},
          bar: {name: "Bar", callback: function(key, opt){ alert("Bar!") }}
      }
      // there's more, have a look at the demos and docs... 
    });
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

