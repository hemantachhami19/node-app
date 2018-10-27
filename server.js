const express = require('express');
const hbs = require('hbs');
var app = express();
var path = require("path");
const fs = require('fs');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

/** next:tells when response is done
    Registering middleware */
app.use((req,res,next)=>{
    var  now  = new Date().toString();
    var log =(`${now}: ${req.method} ${req.url} \n`);
    console.log(log);
    fs.appendFile('server.log',log,(err)=>{
        if(err){
            console.log("unable to append to server.log")
        }
    });
    next();
});

//Registering partials
hbs.registerPartials(__dirname + '/views/partials');

//Registering helpers
hbs.registerHelper('getCurrentYear',()=>{
   return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
});

//Maintainance middleware added and can be used when needed
// app.use((req,res,next)=>{
//    res.render('maintenance.hbs')
// });

app.get('/',(req,res)=>{
    console.log(req);
    res.render('home.hbs',{
        pageTitle:"Home page",
        welcomeMessage:"Welcome to the home page"
    })
});

app.get('/about', function (req, res) {
    res.render('about.hbs',{
        pageTitle: "About page",
    })
});

app.get('/send-json', function (req, res) {
    res.send({
       name:"hemant",
       age:24
    });
});


app.get('/bad', function (req, res) {
    res.send({
       errorMessage: "Unable to handle the request"
    });
});

//listen helps to bind the server in port of machine
app.listen(3000,()=>{
    console.log("server is up in port 3000");
});