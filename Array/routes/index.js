var express = require('express');
var router = express.Router();
var data = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/submit',async function(req, res) {
  var obj = req.body;
  var a = [];
  (obj.hobby1) ? a.push(obj.hobby1) : console.log();
  (obj.hobby2) ? a.push(obj.hobby2) : console.log();
  (obj.hobby3) ? a.push(obj.hobby3) : console.log();
  await data.create({
     username : obj.username,
     Hobbies : a
  });
  console.log(req.body);
  res.send("Check Console");
});

router.get('/check',async function(req, res) {
  res.send(await data.find());
});



module.exports = router;
