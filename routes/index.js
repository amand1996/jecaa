var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/elements', function(req, res, next) {
  res.render('elements', { title: 'Express' });
});
router.get('/left-sidebar', function(req, res, next) {
  res.render('left-sidebar', { title: 'Express' });
});
router.get('/right-sidebar', function(req, res, next) {
  res.render('right-sidebar', { title: 'Express' });
});

module.exports = router;
