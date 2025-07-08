var express = require('express');
var router = express.Router();
var data = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


router.post('/submit',async function(req, res) {
  var obj = req.body;
  await data.create({
    username : obj.username,
    url : obj.url
  });
  res.render("added");
});

router.get('/check',async function(req, res) {
  var alld = await data.find({username : "Raj"});
  console.log(alld);
  res.render("check",alld[0]);
});
module.exports = router;
