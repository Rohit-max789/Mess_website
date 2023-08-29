const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://garg2001rohit:Rohit123@cluster0.p7j7gct.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
console.log("jay shree ram");
});
 

require('./employee.model');
