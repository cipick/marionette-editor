var Radio = require('backbone.radio');
var previewChannel = Radio.channel('preview'); 

var CodeMirror = require('codemirror');
var javascriptMode = require('../../node_modules/codemirror/mode/javascript/javascript.js')
var sassMode = require('../../node_modules/codemirror/mode/sass/sass.js')
var handlebarsMode = require('../../node_modules/codemirror/mode/handlebars/handlebars.js')
var sublimeKeymap = require('../../node_modules/codemirror/keymap/sublime.js')
var searchAddon = require('../../node_modules/codemirror/addon/search/search.js')

var EXTENSIONS_MAP = {
  js: 'javascript',
  scss: 'sass',
  hbs: 'handlebars'
}

module.exports = Marionette.View.extend({
  template: require('../templates/codemirror.hbs'),
  ui: {
  	textarea: '[data-ui="textarea"]'
  },
  onRender: function(){
  	var editor = CodeMirror(this.ui.textarea[0], {
	    lineNumbers: true,
	    tabSize: 2,
     	value: "function myScript(){return 100;}\n",
			mode:  "javascript",
      keyMap: "sublime",
			theme: 'material',
      showCursorWhenSelecting: true,
      autofocus: true,
      commands: {
        save: function(){
          console.log('------------keyboard save------------');
        }
      }
	  });

    view = this;
    editor.on('blur', function(){
      view.model.save({data: editor.getValue()});
    })

    previewChannel.on('load:data', function(file){
      view.model = file;
      var ext = _.last(document.URL.split('.'))
      var mode = EXTENSIONS_MAP[ext]

      editor.setValue(file.get('data'));
      editor.mode = mode;
      console.log(mode);
    })
  }
})
