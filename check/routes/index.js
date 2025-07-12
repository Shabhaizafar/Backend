var express = require('express');
var router = express.Router();
var data = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.post('/submit', function(req, res) {
  console.log(req.body);
});

module.exports = router;
