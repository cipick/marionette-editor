var Search = Marionette.View.extend({
  template: require('../templates/search.hbs'),
  ui: {
  	results: '[data-ui="results"]'
  },
  events: {
  	'input [data-action="input"]': 'eventActionChangeInput',
  	'focus [data-action="input"]': 'eventActionFocusInput',
  	'blur [data-action="input"]': 'eventActionBlurInput'
  },
  eventActionChangeInput: function(ev){
  	this.trigger('handle:change:input', $(ev.target).val());
  },
  eventActionBlurInput: function(ev){
  	this.ui.results.addClass('hide');
  },
  eventActionFocusInput: function(ev){
  	this.ui.results.removeClass('hide');
  },
  onShowResults: function(resultsJSON){
  	var resultsHtml = "";

  	resultsJSON.forEach(function(result){
  		resultsHtml += "<a>" + result.name + "</a>";
  	});

  	this.ui.results.html(resultsHtml);
  }
})

module.exports = Search;
