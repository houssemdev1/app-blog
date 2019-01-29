const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const articleSchema = new Schema({
emailAuthor:String,
nomAuthor:String,
prenomAuthor:String,
    articleTitle:  String, 
  articleContent:  String,
  articleImg:String,
  articleValidation:{ type :Boolean, default : false},
    articleDate: { type : Date, default : Date.now},
   articleComments:[{type : Schema.Types.ObjectId,
    ref : 'comment'}],
  
});
module.exports = mongoose.model('Articles', articleSchema);
 