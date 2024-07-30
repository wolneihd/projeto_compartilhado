var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout');
});

// direcionamento para página > WOLNEI
router.get('/wolnei', function(req, res, next) {
  res.render('feature-wolnei');
});

// direcionamento para página > FILIPE
router.get('/filipe', function(req, res, next) {
  res.render('feature-filipe');
});

module.exports = router;
