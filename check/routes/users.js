var express = require('express');
var mongoose =require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Array");

var data = mongoose.Schema({
  username : String,
  Hobbies : {
    type : Array,
    default : []
  }
});

module.exports = mongoose.model("data",data);