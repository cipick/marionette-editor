module.exports =
  bindRoutes: (app)->
    app.get '/preview', require('./controller/base').index
    app.get '/preview/:path/:filename', require('./controller/base').preview

    app.get "/files", require('./controller/file').getFiles
    app.get "/file/:name", require('./controller/file').getFile
    app.post "/file/:name", require('./controller/file').createFile
    app.put "/file/:name", require('./controller/file').saveFile
    app.delete "/file/:name", require('./controller/file').deleteFile