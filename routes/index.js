var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/team', function(req, res, next) {
  res.render('elements');
});
router.get('/aboutus', function(req, res, next) {
  res.render('vision');
});
router.get('/events', function(req, res, next) {
  res.render('events');
});
router.get('/contact-us', function(req, res, next) {
  res.render('contact-us');
});
// router.get('/photo', function(req, res, next) {
//   res.render('photo');
// });
router.get('/faq', function(req, res, next) {
  res.render('faq');
});
router.get('/photo', function(req, res, next) {
  res.render('element');
});
router.get('/schedule', function(req, res, next) {
  res.render('Schedule');
});
router.get('/talk', function(req, res, next) {
  res.render('Talk');
});

module.exports = router;
