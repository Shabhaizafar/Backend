var express = require('express');
var router = express.Router();
var userdata = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render("index");
});


// Cookies : 
// router.get('/', function(req, res, next) {
//    res.cookie.age = 20;
//  res.render("index");
// });


// router.get('/checkcookie', function(req, res, next) {
//    console.log(res.cookie);
//    res.send("Check Cookie");
// });

// router.get('/deletecookie', function(req, res, next) {
//    res.clearCookie();
//    res.send("delete Cookie");
// });



//  Sessions : 
// router.get('/', function(req, res, next) {

//    req.session.nothingHere = 25;
//  res.render("index");
// });


// router.get('/checksession', function(req, res, next) {
//   console.log(req.session);
//   res.send("Checked");
// });


// router.get('/removesession', function(req, res, next) {
//    req.session.destroy();
//   res.send("Destroy");
// });

// 


// CRD : 
// router.get('/createuser',async function(req,res){
//     const u1= await userdata.create({
//         firstname : "Ajay",
//         lastname : "Sharma",
//         age : 20
//     });
//     res.send(u1);
// });

// router.get('/allusers',async function(req,res){
//    const alluser = await userdata.find();
//    res.send(alluser);
// });

// router.get('/singleuser',async function(req,res){
//    const us1 = await userdata.findOne({firstname : "Ajay"});
//    console.log(us1);
//    res.send(us1);
// });

// router.get('/deleteuser',async function(req,res){
//    const us1 = await userdata.findOneAndDelete({firstname : "Ajay"});
//    console.log(us1);
//    res.send(us1);
// });

module.exports = router;
