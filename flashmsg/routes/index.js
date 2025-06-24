var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/profile', function(req, res) {
    // req.flash("name",data);
    req.flash("Age",20);
    req.flash("name","Rajesh");
    res.send("Flash Created 11");
});


router.get('/msg', function(req, res) {
    console.log(req.flash("Age"));
    console.log(req.flash("name"));
    res.send("Check Console Screen!!");
});




module.exports = router;
