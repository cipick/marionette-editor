router = require './router'

express = require('express')
bodyParser = require('body-parser')

app = express()
app.use express.static "#{__dirname}/../public"

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use (req, res, next) ->
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-HTTP-Method-Override, X-Requested-With, Content-Type, Accept");
  if ('OPTIONS' is req.method)
    res.sendStatus(200);
  else
    next();

router.bindRoutes app

port = 3004

app.listen port, ->
	message = '[SERVER] Access URLs:\n'
	message += '-------------------------------------\n'
	message += "Local: http://localhost:#{port}\n"
	message += '-------------------------------------'

	console.log message
