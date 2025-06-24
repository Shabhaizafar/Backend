var mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/mongodb_operation");

const students =  mongoose.Schema({
  firstname : String, 
  lastname : String,
  age : Number,
  slogan : String,
  hobbies : {
    type : Array,
    default : []
  },
  joining_date : {
    type : Date,
    default : Date.now()
  }
});

module.exports = mongoose.model("students",students);


/*
Users : 



*/ 