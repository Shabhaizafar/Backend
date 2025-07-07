var mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/withDoubleDate");


const data =  mongoose.Schema({
    firstname : String,
    url : String
});
module.exports = mongoose.model("data",data);



// mongoose.connect("mongodb://127.0.0.1:27017/withDate");

// // const students =  mongoose.Schema({
// //     firstname : String,
// //     lastname : String
// // });


// const data =  mongoose.Schema({
//     firstname : String,
//     date : {
//         type : Date,
//         default : Date.now()
//     }
// });
// module.exports = mongoose.model("data",data);