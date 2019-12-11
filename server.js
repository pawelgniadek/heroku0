var express = require('express');
var bodyParser = require('body-parser');
var users = require("./userDatabase");

var app = express();

// var parser = bodyParser.urlencoded();
var parser = bodyParser.json();

app.use(parser);

app.use(express.static('public'));

app.get('/users', function(req, res) {
    users.getUsers((err, data) => {
        console.log("data: ", data);
        res.end(JSON.stringify(data));
    });
})

app.get('/add_user', function(req, res) {
    console.log(req.body);
    users.addUser(req.query.last_name, req.query.first_name);
    res.end("User added");
})

const listener = app.listen(8080, 
	() => console.log(`Listening on ${ listener.address().port }`));

