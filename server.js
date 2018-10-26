const  express  = require('express');
var app  = express();

app.get('/', function (req,res) {
res.send("Basic server setup")
});
//listen helps to bind the server in port of machine
app.listen(3000);