const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const messageSchema = new Schema({
    idAuthor:String,
  messageContent:  String,
  
});
module.exports = mongoose.model('Messages', messageSchema);
 