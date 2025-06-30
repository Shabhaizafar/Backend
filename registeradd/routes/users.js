var mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/register");

const students =  mongoose.Schema({
    firstname : String,
    lastname : String
});

module.exports = mongoose.model("students",students);