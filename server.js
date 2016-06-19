var App = require('./');
var path = require('path');
var express = require('express');

var port = process.env.PORT || 3000;

App.use(express.static(path.join(__dirname, '../ui')));

App.listen(port, function () {
    console.log('Server started on port', port);
})
