const express = require('express');
const hbs = require('hbs');
var app = express();
var path = require("path");
app.set('view engine', 'hbs');

//ToDo::future Fix loading the static files
//app.use(express.static(__dirname +'/public'));
//app.use('/public', express.static(path.join(__dirname, 'public')));
//app.use('/static', express.static('public'));

hbs.registerPartials(__dirname + '/views/partials');
app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:"Home page",
        currentYear: new Date().getFullYear()
    })
});

app.get('/about', function (req, res) {
    res.render('about.hbs',{
        pageTitle: "About page",
        currentYear:new Date().getFullYear()

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