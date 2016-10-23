fs = require 'fs'
path = require('path')
pug = require('pug')

openFile = (filename, cb)->
  fs.readFile filename, 'binary', (err, file)->
    if err
      res.writeHead 500, 'Content-Type': 'text/plain'
      res.write "#{err} \n"
      res.end()
    else
      return cb(file)

renderHtml = (res, html)->
  res.writeHead 200, 'Content-Type': 'text/html'
  res.write html
  res.end()

module.exports =
  index: (req,res)->
    filename = __dirname + '/../../public/index.html'
    openFile filename, (file)->
      renderHtml(res, file)

  preview: (req, res)->
    path = "/#{req.params.path}/#{req.params.filename}"

    filename = __dirname + '/../../app' + path
    openFile filename, (file)->
      locals = {}
      locals.path = path
      locals.source = file

      html = pug.renderFile(__dirname + '/../views/css_editor.pug', locals)
      renderHtml(res, html)
