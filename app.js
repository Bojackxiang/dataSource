var express = require('express');
var app = express(); 
var path = require("path");
var data_source = require("./pages/js/javascript.js");

// DEFINE JS FILE PATH (WORKS)
app.use(express.static('./pages/js/'));
// DEFINE STYLESHEET PATH (WORKS)
app.use(express.static('./pages/style/'));


var address = "";


app.get('/', function(req, res){
	address = req.connection.remoteAddress;
	res.sendFile( 'index.html', {root: './pages'} );
});


console.log(address);


app.listen('8888', 'localhost', function(){
	console.log('server is on at localhost:8888');
});

