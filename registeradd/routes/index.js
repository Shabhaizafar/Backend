var express = require('express');
var router = express.Router();
var data = require('./users');

/* GET home page. */
// registerpage
// router.get('/', function(req, res) {
//   res.render('index');
// });



// register submit
// router.post('/submit', async function(req, res) {
//   var obj = req.body;
//   var d1 = new Date(obj.date);
//      var s = await data.create({
//       firstname : obj.firstname,
//       date : d1
//     });
//   console.log(s);
//   res.send("Register Successfully !!!");
// });


router.post('/submit', async function(req, res) {
  var obj = req.body;
  var d1 = new Date(obj.sdate);
  var d2 = new Date(obj.edate);
  var s = await data.create({
      firstname : obj.firstname,
      startdate : d1,
      enddate : d2
    });
  console.log(s);
  res.send("Register Successfully !!!");
});

router.get('/check', async function(req, res) {
     var s = await student.find();
  res.send(s);
});




// login page
// router.get('/', function(req, res) {
//   res.render('login');
// });

// // login page : signin
// router.post('/signin', async function(req, res) {
//   var obj = req.body;

//   var sall = await student.find({
//     firstname : obj.firstname,
//     lastname : obj.lastname
//   });
//   console.log(sall[0]?.firstname);
//   if(!sall[0]?.firstname){
//     res.render('index');
//   }else{
//     res.send("Login SuccessFully"); 
//   }
// });

router.get('/', function(req, res) {
  res.render('index');
});

// router.post('/submit',function(req,res){
//   res.send(req.body);
// });
module.exports = router;
