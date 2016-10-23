
dirTree = require('directory-tree');
_ = require('lodash');
fs = require('fs');

module.exports =
  getDirTree: (req, res)->
    tree = dirTree("#{__dirname}/../../app/");
    filtered = _.filter tree.children, (child)->
      # return false unless child.children
      return false if child.name in ['fonts', 'images', '.DS_Store']
      return true

    res.json(filtered).end()

  createFile: (req, res)->
    name = req.params.name

    fs.writeFile "#{__dirname}/../../app/#{name}", "Start coding you lazy ass", (err)->
      if err
        res.sendStatus(403).json(err)
      else
        res.json(message: "#{path} has been created.");

  saveFile: (req, res)->
    path = req.body.path
    data = req.body.data

    fs.writeFile "#{__dirname}/../../app/#{path}", data, (err)->
      if err
        res.sendStatus(403).json(err)
      else
        res.json(message: "#{path} has been saved.");

  deleteFile: (req, res)->
    name = req.params.name

    fs.unlink "#{__dirname}/../../app/#{name}", (err) =>
      if err
        res.sendStatus(403).json(err)
      else
        res.json(message: "#{name} has been deleted.");

  permisions: (req, res)->
    res.json();
