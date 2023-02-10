var express = require('express');
var app = express();
var cors = require('cors');

// Serve static files from the public directory
app.use(express.static('public'));
app.use(cors());

// Create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    res.send({
        name:       req.params.name,
        email:      req.params.email,
        password:   req.params.password
    });
});

// Login user
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email:      req.params.email,
        password:   req.params.password 
    });   
});

// All accounts
app.get('/account/all', function (req, res) {
    res.send({
        name:       'Mit',
        email:      'Mitsananikone@gmail.com',
        password:   'secret'
    });
});

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);