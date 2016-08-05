var express = require('express')
var app = express()
 
app.get('/', function (req, res) {

	var options = {
		root: __dirname
	}
	
  res.sendFile('index.html', options)
})
 
app.listen(3000)