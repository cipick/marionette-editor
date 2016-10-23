var FoldersView = require('../views/folders');
var File = require('../models/file');

module.exports = {
	getView: function(filesCollection){
    foldersView = new FoldersView({collection: filesCollection});

    foldersView.on('childview:handle:click:add', function(childView){
      var path = childView.model.get('name');

      window.destroyToasts = function(){
        $('#toast-container').empty();
      }

      window.saveFile = function(){
        file = new File({path: path + '/' + $('#input').val()});
        file.save();
        destroyToasts();
      }

      var $toastContent = '<div><input id="input" placeholder="Filename..."></div><div><a onClick="saveFile()" class="waves-effect waves-light btn">OK</a><a id="#esc" onClick="destroyToasts()" class="waves-effect waves-light btn">ESC</a></div>';
      Materialize.toast($toastContent);
    });

    foldersView.on('childview:handle:click:remove', function(childView){
      var path = childView.model.get('name');
      
      file = new File({path: path});
      file.destroy().done(function(){
        Materialize.toast('File deleted', 3000, 'rounded');
      }).fail(function(){
        Materialize.toast('Error error error', 3000, 'rounded');
      })
    });

    foldersView.on('childview:handle:click:source', function(childView){
      var path = childView.model.get('name');

      Materialize.toast("Open #{path} file", 3000, 'rounded');
    });

    return foldersView;
  }
}

