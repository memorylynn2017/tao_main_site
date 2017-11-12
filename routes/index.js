var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
  				      city: "London",
                street: "Baker Street",
                number: "221B" });
});

module.exports = router;
