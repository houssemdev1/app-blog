const mongoose = require('mongoose');

const Schema = mongoose.Schema;


var commentArticleSchema = new Schema({
  nomAuthor:{type:String,required:true},
  prenomAuthor:{type:String,required:true},
    commentContent : String,
    commentDate : { type : Date, default : Date.now }
  });
  module.exports = mongoose.model('comment', commentArticleSchema); 