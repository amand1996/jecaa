var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/elements', function(req, res, next) {
  res.render('elements');
});
router.get('/vision', function(req, res, next) {
  res.render('vision');
});
router.get('/mission', function(req, res, next) {
  res.render('mission');
});
router.get('/events', function(req, res, next) {
  res.render('events');
});
router.get('/contact-us', function(req, res, next) {
  res.render('contact-us');
});
router.get('/photo', function(req, res, next) {
  res.render('photo');
});


module.exports = router;
