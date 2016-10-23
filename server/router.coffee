module.exports =
  bindRoutes: (app)->
    app.get '/preview', require('./controller/base').index
    app.get '/preview/:path/:filename', require('./controller/base').preview

    app.get "/dirTree", require('./controller/file').getDirTree

    app.post "/file/:name", require('./controller/file').createFile
    app.put "/file", require('./controller/file').saveFile
    app.put "/file/:name", require('./controller/file').saveFile
    app.delete "/file/:name", require('./controller/file').deleteFile

    app.get '/app/structure', require('./controller/app').getStructure
