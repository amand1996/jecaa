var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/elements', function(req, res, next) {
  res.render('elements');
});
router.get('/left-sidebar', function(req, res, next) {
  res.render('left-sidebar');
});
router.get('/right-sidebar', function(req, res, next) {
  res.render('right-sidebar');
});
router.get('/events', function(req, res, next) {
  res.render('events');
});


module.exports = router;
