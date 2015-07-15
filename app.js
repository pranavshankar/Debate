var path = require('path');
var ejs = require('ejs');
var express = require('express');
var http = require('http');
var fs = require('fs');
var basicAuth = require('basic-auth');

var app = express();

// app.use(express.urlencoded());

app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + "/views");
	app.set('view engine', 'ejs');
	app.use(express.static(path.join(__dirname, 'static')));

var SCRIPTS_PATH = "js";
var scriptsFiles = fs.readdirSync(path.join(__dirname, "static/" + SCRIPTS_PATH));
var scripts = [];
scriptsFiles.forEach(function(fileName) {
	if(path.extname(fileName) == ".js") {
		scripts.push(path.join(SCRIPTS_PATH, fileName));
	}
});

// ROUTING FOR FRONT END
app.get('/#', function(request, response) {
	response.render('base', {'scripts': scripts});
});

app.get('/', function(request, response) {
	response.render('base', {'scripts': scripts});
});

app.get('/#/AboutUs', function(request, response) {
	response.render('base', {'scripts': scripts});
});

DEFAULT_PASSWORD = "admin";

// ADMIN routing
var auth = function(request, response, next) {
 	function unauthorized(response) {
    	response.sendStatus('WWW-Authenticate', 'Basic realm=Authorization Required');
    	return response.send(401);
  	};

  	var user = basicAuth(request);

  	if (!user || !user.name || !user.pass) {
    	return unauthorized(response);
  	};

  	if (user.name === 'admin' && user.pass === DEFAULT_PASSWORD) {
    	return next();
  	} else {
    	return unauthorized(res);
  	};
};

app.get('/admin', auth, function(request, response) {
	response.render('admin');
}); 

// API ROUTING

// ::param num is the number of events to fetch
// events are in form {'title': ...,'date': ..., 'location': ..., 'description': ..., 'link': ...}
app.get('/recent_events', function(request, response) {
	var testEvent = {title: "2014 recruiting", link: '/#/AboutUs'};
	var test = {eventOne: testEvent, eventTwo: testEvent};
	response.send(test);
});

app.get('/recent_stories', function(request, response) {
	var num = request.query.num;
	response.send({num: {num: num}, num2: {num: num}});
});

http.createServer(app).listen(app.get('port'));



