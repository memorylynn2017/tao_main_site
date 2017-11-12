'use strict';
var express = require('express');
var router = express.Router();
//router.get("" , require('./controller/'));

var IndexHandler = require(process.cwd() + '/src/controllers/indexControllers.js');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express',
        city: "London",
        street: "Baker Street",
        number: "221B"
    });
});

router.post('/api/click', function(req, res, next) {
    var indexHandler = new IndexHandler(req, res);
    indexHandler.indexAction();
});

module.exports = router;