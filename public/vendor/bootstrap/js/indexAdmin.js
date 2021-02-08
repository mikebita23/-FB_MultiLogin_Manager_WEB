const express = require("express");
const app  = express();
var server = require('http').createServer(app);
var port = 3000;
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public/views'));
console.log(__dirname);
app.use(bodyParser.urlencoded({
    extended: true
}));

 app.use(bodyParser.json());

 app.post('/',function(req,res){
    var username = req.body.adminUsername;
    var password = req.body.adminPassword;
    res.send('admin.html');
 });

 app.listen(port)