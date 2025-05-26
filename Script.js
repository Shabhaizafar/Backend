const  express = require("express");

const app = express();
app.set("view engine",'ejs');

// Middleware 
// app.use(function(request,response,next){
//     console.log("Middle Ware");
//     next();
// });

// app.get(route path,function);

// app.get("/",function(request,response){
//     console.log(response);
//     response.send("Hello Everyone,Welcome");
// });

// app.get('/profile',function(request,response){
//     response.send('<h1>Hello Everyone Welcome to Profile</h1>');
// });

app.get('/profile',function(request,response){
    response.render('profile');
});

app.get('/contact/:uname',function(request,response){
    console.log(request.params);
    response.render('contact',request.params);
});
app.get('/',function(request,response){
    response.render('home');
});
// app.get('/profile/:username',function(request,response){
//     response.send(`<h1>Hello Everyone Welcome!!${request.params.username}</h1>`);
// });
// app.get("/contact",function(request,response){
//     response.send("Contact Here");
// });
// app.get("/contact/:username",function(request,response){
//     response.send(`Profile Page : ${request.params.username}`);
// });

app.listen(3000);


// https://themewagon.github.io/game-warrior/review.html