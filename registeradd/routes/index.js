var express = require('express');
var router = express.Router();
var student = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/submit', async function(req, res) {
  var obj = req.body;
     var s = await student.create({
      firstname : obj.firstname,
      lastname : obj.lastname
    });
  res.send("Register Successfully !!!");
});

router.get('/check', async function(req, res) {
     var s = await student.find();
  res.send(s);
});

module.exports = router;
