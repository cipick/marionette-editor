app = [
  name: 'urls',
  color: '#F1E9DA',
  contents: [
    {
      title: 'app.structure'
      content: '/app/structure'
    }
  ],
,
  name: 'router',
  color: '#093824',
  contents: [
    {
      title: '',
      content: 'index'
    },
    {
      title: 'file',
      content: 'file'
    }
  ]
,
  name: 'controllers',
  color: '#A27035',
  contents: [
    {
      name: 'index',
      content: 'index.js'
    }
  ,
    {
      name: 'file',
      content: 'file.js'
    }
  ]
,
  name: 'collections',
  color: '#2E294E',
  contents: [
    {
      name: 'files',
      content: 'files.js'
    }
  ]
,
  name: 'models',
  color: '#FFD400',
  contents: [
    {
      name: 'file',
      content: 'file.js'
    }
  ]
,
  name: 'views',
  color: '#2E294E',
  contents: [
    {
      title: 'layout',
      content: 'layout.js'
    },
    {
      title: 'folders',
      content: 'folders.js'
    }
  ]
,
  name: 'templates',
  color: '#541388',
  contents: [
    {
      title: 'layout'
      content: 'layout.hbs' 
    },
    {
      title: 'sidebar'
      content: 'sidebar.hbs' 
    },
    {
      title: 'filecollection'
      content: 'filecollection.hbs' 
    },
    {
      title: 'file'
      content: 'file.hbs' 
    }
  ]
,
  name: 'styles',
  color: '#D90368',
  contents: [
    {
      title: 'layout'
      content: 'layout.styl' 
    },
    {
      title: 'sidebar'
      content: 'sidebar.styl' 
    },
    {
      title: 'filecollection'
      content: 'filecollection.styl' 
    },
    {
      title: 'file'
      content: 'file.styl' 
    }
  ]
]

module.exports =
  getStructure: (req,res)->
    res.json app
