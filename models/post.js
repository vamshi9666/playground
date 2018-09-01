const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  
   desc:{
     type:String,
     required:true
   }
})
module.exports = mongoose.model('post',postSchema)
