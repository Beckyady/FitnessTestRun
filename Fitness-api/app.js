var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Login = require('./models/logIn');
SignUp = require('./models/signUp');

//connect to mongoose
mongoose.connect('mongodb://localhost/fitness'); //,{ useNewUrlParser: true} 
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('please use /api/fitness')
    });

    app.post('/signup', function(req, res){
        var signup = req.body;
       SignUp.addsignup(signup, function(err, signup){
           if(err){
               throw err; 
         
           }
           res.json(signup);
       });
       });

       app.listen(3000);

console.log('Running on port 3000...  ');


