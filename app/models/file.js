var File = Backbone.Model.extend({
  urlRoot: 'http://localhost:3004/file',
  idAttribute: 'path'
});

module.exports = File;
