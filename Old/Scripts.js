var express = require("express");

var app = express();


app.use(function(request,response,next){
  console.log("Hello World");
  next();
});

app.use(function(request,response,next){
  console.log("Everyone!!");
  next();
});

app.get("/",function(request,response){
  response.send("Hello Everyone,Welcome to Node JS 😀!!!");
});

app.get("/profile",function(request,response){
  response.send("Profile 😀!!!");
});


app.listen(3000);

// var figlet = require("figlet");

// figlet("Royal", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// var age  = 20;
// console.log("Main File : Your age is : ",age);

// module.export = age;