// express.js

var express = require('express');
var app = express();

// jade, handlebars, ejs
app.set('view engine', 'ejs');

// route
app.get('/', function(req, res) {
	// res.send('<h1>Home Page</h1>')
	res.render('index', {title : 'Home Page', 
		name : 'Claus', 
		contactLink : '<a href="/contact">Go to Contact</a>'});
});

app.get('/contact', function(req, res) {
	//res.send('<h1>Contact</h1>')
	res.render('index', {title : 'Contact', name : 'Troels'});
});

app.listen(3001);