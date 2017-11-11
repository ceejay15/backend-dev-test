/*var fs = require('fs');
var bodyparser = require('body-parser');
var path = require('path');
var cors = require('cors');
var app = require('http').createServer(handler);

app.listen(4000);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}*/

var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var http = require('http');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyparser.json({limit: '1000mb'}));
app.use(bodyparser.urlencoded({limit: '1000mb', extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/',function(req,res){	
	 res.sendFile(path.join(__dirname+'/index.html'));
		//__dirname : It will resolve to your project folder.
 
});

app.post('/fetchdata',function(req,res){	
      var options = {
		  host: 'http://dev-test.madebywiser.com/part1',
		  method: 'GET'
		};	 
	 
	 http.get('http://dev-test.madebywiser.com/part1', (resp) => {
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
});

app.listen(3000);
