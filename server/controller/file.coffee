dirTree = require('directory-tree');
_ = require('lodash');
fs = require('fs');
appHierarchy = ['index.js', 'application.js', 'routers', 'controllers', 'collections', 'models', 'views', 'templates', 'vendor', 'styles']

filter = (item)->
  # return false unless child.children
  return false if item.name[0] is '.'
  return false if item.name in ['fonts', 'images', 'LICENSE', 'node_modules', 'public', '.DS_Store']
  return true

transformName = (item)->
  if item.path.indexOf('app') > 0
    parent = 'app'

  if item.path.indexOf('server') > 0
    parent = 'server'

  if parent
    item.name = "<#{parent}/> #{item.name}"

  item

module.exports =
  getFiles: (req, res)->
    tree = dirTree("#{__dirname}/../../");
      
    filtered = _.filter tree.children, filter

    sorted = _.sortBy filtered, 'children'

    sortedApp = _.sortBy sorted[1].children, (file)->
      appHierarchy.indexOf(file.name)
	 	
    appWithIcons = _.map sortedApp, (item)->
      if item.path.indexOf('model') > 0
        item['icon'] = '/logos/bb.svg'
        item['docs'] = 'http://backbonejs.org/'

      if item.path.indexOf('scss') > 0
        item['icon'] = '/logos/sass.svg'
        item['docs'] = 'http://sass.org/'

      if item.path.indexOf('styles') > 0
        item['icon'] = '/logos/sass.svg'
        item['docs'] = 'http://sass.org/'

      if item.path.indexOf('js') > 0
        item['icon'] = '/logos/js.svg'
        item['docs'] = 'http://sass.org/'

      if item.path.indexOf('controller') > 0
        item['icon'] = '/logos/js.svg'
        item['docs'] = 'http://sass.org/'

      if item.path.indexOf('collection') > 0
        item['icon'] = '/logos/bb.svg'
        item['docs'] = 'http://backbonejs.org/'
      
      if item.path.indexOf('routers') > 0
        item['icon'] = '/logos/mn.svg'

      if item.path.indexOf('view') > 0
        item['icon'] = '/logos/mn.svg'

      if item.path.indexOf('template') > 0
        item['icon'] = '/logos/hbs.svg'

      if item.path.indexOf('vendor') > 0
        item['icon'] = '/logos/npm.svg'

      item;
                      
    app = _.map(_.filter(appWithIcons,filter), transformName)

    _.forEach app, (item)->
      app.children = _.filter(app.children, filter)

    server = _.map(_.filter(sorted[0].children,filter), transformName)

    server = _.map server, (item)->
      item['icon'] = '/logos/coffee.svg'
      
      return item

    result = _.concat(app, server)

    res.json(result).end()

  getFile: (req, res)->
    name = req.params.name

    fs.readFile name, 'utf-8', (err, data)->
      if err
        res.sendStatus(403).json(err)
      else
        res.json({data: data});

  createFile: (req, res)->
    name = req.params.name

    fs.writeFile "#{__dirname}/../../app/#{name}", "Start coding you lazy ass", (err)->
      if err
        res.sendStatus(403).json(err)
      else
        res.json(message: "#{path} has been created.");

  saveFile: (req, res)->
    name = req.params.name
    data = req.body.data

    fs.writeFile name, data, (err)->
      if err
        res.sendStatus(403).json(err)
      else
        res.json(message: "#{name} has been saved.");

  deleteFile: (req, res)->
    name = req.params.name
    console.log name

    # fs.unlink "#{__dirname}/../../app/#{name}", (err) =>
    #   if err
    #     res.sendStatus(403).json(err)
    #   else
    #     res.json(message: "#{name} has been deleted.");

  permisions: (req, res)->
    res.json();
