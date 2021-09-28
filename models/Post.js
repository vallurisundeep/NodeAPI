const mongoose=require('mongoose');
const { notify } = require('../routes/posts');

const PostSchema=mongoose.Schema({

     
    empid:Number,
    fname:String,
    lname:String,
    gender:String,
    email:String,
    age:Number,
    doj:String

});

 
module.exports=mongoose.model('Posts',PostSchema);