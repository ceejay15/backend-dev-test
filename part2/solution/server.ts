var express = require('express');
var path = require('path');
var http = require('http');
var cors = require('cors');

var app = express();

console.log("up and running");
app.use(cors());			
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var options = {
		  host: 'http://dev-test.madebywiser.com/part3/x:',
		  method: 'GET'
		};	 
	 
	 http.get('http://dev-test.madebywiser.com/part3/x:', (resp) => {
		  let data = '';		 
		  // A chunk of data has been recieved.
		  resp.on('data', (chunk) => {
			data += chunk;
		  });
		 
		  // The whole response has been received. Print out the result.
		  resp.on('end', () => {
			//console.log(JSON.parse(data).explanation);
			console.log("data==>", data);
			res.send(data);
		  });
		 
		}).on("error", (err) => {
		  console.log("Error: " + err.message);
	});




app.listen("3000");
