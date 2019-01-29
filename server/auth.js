const express=require("express");
const bodyParser=require("body-parser");
const app=express();

cors = require('cors') ;
app.use(cors());
const auth=require('./routes/route');
const mongoose=require("mongoose");
let port=3000;
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/blog',{ useNewUrlParser: true },function(err){
    if (err) console.log("erreur de connexion!")
   else  console.log("connexion etablie")
});
app.listen(port,()=>{
    console.log("server is running at "+port);
});
app.use('/auth',auth);



