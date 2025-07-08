var express = require('express');
var mongoose =require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/urlfetch");

var data = mongoose.Schema({
  username : String,
  url : String
});

module.exports = mongoose.model("data",data);
