var express = require('express');
var path = require('path');
var http = require('http');
var cors = require('cors');
//var url =  require('url');

var app = express();

console.log("up and running");
app.use('/', express.static(__dirname+'/')); // loading index.html
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/part3/:x',function(req,res){
    console.log("receiving req", req.params['x']);

    var num = req.params['x'];

    var resp = fizzBuzz(num);

    console.log("fizzBuzz return:", resp);

    res.send(resp); //sending fizzBuzz


});


function fizzBuzz(number){
    var myFizzBuzz = new Array();

	for(var i=0; i < number; i++){
	    /*if(i % 3 === 0 && i % 5 ===0) {
           console.log("FizzBuzz");
            myFizzBuzz.push({value:"Fizz Buzz"});
        }else*/
        if(i %3 ===0){
	        console.log("Fizz");
	        myFizzBuzz.push({value:"Fizz"})
        }else if(i % 5 ===0){
            console.log("Buzz");
            myFizzBuzz.push({value:"Buzz"});
        }
        else if(i % 7 ===0){
            console.log("special_word");
            myFizzBuzz.push({value:"special_word"});
        }
        else if(i %3 !=0 && i %5 !=0 && i % 7 !=0) {
            console.log(i);
            myFizzBuzz.push({value:i});
        }
        else{
             console.log("value of i is "+i);
            myFizzBuzz.push({value:i});
        }
    }
    return {'fizzBuzz':myFizzBuzz};
}

app.listen("4000");
