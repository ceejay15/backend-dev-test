var express = require('express');
var path = require('path');
var http = require('http');
var cors = require('cors');

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
        if(i %3 ===0){
	        console.log("Fizz");
	        myFizzBuzz.push({value:"Fizz"})
        }else if(i % 5 ===0){
            console.log("Buzz");
            myFizzBuzz.push({value:"Buzz"});
        }
        else if(i % 7 ===0){
            console.log("special_word");
            myFizzBuzz.push({value:"ennui"});
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

//start
app.get('/myspecialword',function(req,res){
    console.log("-----requesting-----");
    var url = "http://dev-test.madebywiser.com/part3/:x";
    var auth = "Basic " + new Buffer('wiserdev' + ":" + 'password').toString("base64");
    var request = require('request');

    request.get({
           url :url,
           headers : { "Authorization" :auth}
    },function(error, response,body){
        if(error){
            console.log('"cannot communicate with API '+error);
            res.send(error)
        }
        console.log('body : ', body);
        res.send(body);
    });

    console.log('--------finish----------');
//end
});

app.listen("4000");
