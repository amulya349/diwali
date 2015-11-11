var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8880;
var path = require('path');

app.use(express.static('public'));
// launch ======================================================================
app.listen(port);
console.log('Listening at http://localhost:' + port);

// routes here =================================================================

app.get('/', function(req, res) {
	res.sendFile('index.html', {"root": __dirname});
})