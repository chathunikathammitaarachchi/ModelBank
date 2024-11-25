const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Model_name:{
    type:String, 
    required:true
  },
  title:{
    type:String, 
    required:true
  },
  Date:{
    type:Date,
    required:true
  },
  Camera_Details:{
    type:String, 
    required:true
  },
  description:{
    type:String, 
    required:true
  }
});

module.exports= mongoose.model(
  "UserModel",
  userSchema
)
module.exports = mongoose.model('User', userSchema);