var FolderView = Marionette.View.extend({
  tagName: 'li',
  
  template: require('../templates/folder.hbs'),

  onRender: function(){
    setTimeout(function(){
      window.$('.collapsible').collapsible();
      window.$('.tooltipped').tooltip({delay: 50});
    }, 1000);
  },

  events: {
    'click [data-action="add"]': "eventActionClickAdd",
    'click [data-action="remove"]': "eventActionClickRemove",
    'click [data-action="source"]': "eventActionClickSource"
  },

  eventActionClickAdd: function(ev){
    ev.stopPropagation();

    this.trigger('handle:click:add');
  },

  eventActionClickRemove: function(ev){
    ev.stopPropagation();

    this.trigger('handle:click:remove');
  },

  eventActionClickSource: function(ev){
    ev.stopPropagation();

    this.trigger('handle:click:remove');
  }
});

module.exports = FolderView;
