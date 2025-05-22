const  express = require("express");

const app = express();

// Middleware 
// app.use(function(request,response,next){
//     console.log("Middle Ware");
//     next();
// });

// app.get(route path,function);

app.get("/",function(request,response){
    console.log(response);
    response.send("Hello Everyone,Welcome");
});


app.get("/contact",function(request,response){
    response.send("Contact Here");
});
app.get("/contact/:username",function(request,response){
    response.send(`Profile Page : ${request.params.username}`);
});

app.listen(3000);