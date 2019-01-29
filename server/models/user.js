const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:  String,
  userLastname: String,
    userEmail:  String, 
    userPassword: String,
    role:String,
    messages:[{type : Schema.Types.ObjectId,
      ref : 'Messages'}],
    

});
module.exports = mongoose.model('User', userSchema);
