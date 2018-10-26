const express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("<h1>Index page</h1>")
});
app.get('/about', function (req, res) {
    res.send("<h1>About page</h1>")
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
app.listen(3000);