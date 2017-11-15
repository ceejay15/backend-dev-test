//var fs = require('fs');
//var bodyparser = require('body-parser');
var express = require('express');
var path = require('path');
var http = require('http');
var cors = require('cors');
//var url =  require('url');
var app = express();
console.log("up and running");
app.use('/', express.static(__dirname + '/')); // loading index.html
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/* app.get('/part3:x',(function(req, res){*/
/*    console.log("receiving request",req.params);*/
/* }));*/
/*http.get('/part3/:x',function(req, res){*/
/*    console.log(req.params);*/
/*});*/
app.get('/part3/:x', function (req, res) {
    // console.log("received",req.params['x'].toString());
    console.log("receiving req", req.params['x']);
    //var num = url.parse(req.url, true).pathname;
    //console.log('number input is:',num);
    var num = req.params['x'];
    var resp = fizzBuzz(num);
    console.log("fizzBuzz return:", resp);
    res.send(resp); //sending fizzBuzz
});
/*var options = {
          host: 'http://dev-test.madebywiser.com/part3/x:',
          method: 'GET'
        };
     
     http.get('http://localhost:3000/part3/x:', (res) => {
          let data = '';
          // A chunk of data has been recieved.
          res.on('data', (chunk) => {
            data += chunk;
          });
         
          // The whole response has been received. Print out the result.
          res.on('end', () => {
            //console.log(JSON.parse(data).explanation);
            console.log("data==>",JSON.parse(data));
            res.send(data);
          });
         
        }).on("error", (err) => {
          console.log("Error: " + err.message);
    });

*/
/*
*/
function fizzBuzz(number) {
    var myFizzBuzz = new Array();
    //var myFizzBuzz = "";
    for (var i = 0; i < number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            myFizzBuzz.push({ value: "Fizz Buzz" });
            // return myFizzBuzz;
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
            myFizzBuzz.push({ value: "Fizz" });
            // return myFizzBuzz;
            // myFizzBuzz = "Fizz";
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
            myFizzBuzz.push({ value: "Buzz" });
            // return myFizzBuzz;
            //myFizzBuzz = "Buzz";
        }
        else if (i % 3 != 0 && i % 5 != 0) {
            console.log(i);
            myFizzBuzz.push({ value: i });
            //return myFizzBuzz;
            //myFizzBuzz = "x";
        }
        else {
            console.log("value of i is " + i);
            myFizzBuzz.push({ value: i });
            // return myFizzBuzz;
        }
    }
    return { 'fizzBuzz': myFizzBuzz };
}
app.listen("3000");
