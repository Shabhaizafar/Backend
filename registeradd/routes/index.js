var express = require('express');
var router = express.Router();
var student = require('./users');

/* GET home page. */
// registerpage
// router.get('/', function(req, res) {
//   res.render('index');
// });



// register submit
// router.post('/submit', async function(req, res) {
//   var obj = req.body;
//      var s = await student.create({
//       firstname : obj.firstname,
//       lastname : obj.lastname
//     });
//   res.send("Register Successfully !!!");
// });

// router.get('/check', async function(req, res) {
//      var s = await student.find();
//   res.send(s);
// });



// login page
router.get('/', function(req, res) {
  res.render('login');
});

// login page : signin
router.post('/signin', async function(req, res) {
  var obj = req.body;

  var sall = await student.find({
    firstname : obj.firstname,
    lastname : obj.lastname
  });
  console.log(sall[0]?.firstname);
  if(!sall[0]?.firstname){
    res.render('index');
  }else{
    res.send("Login SuccessFully"); 
  }
});


module.exports = router;
