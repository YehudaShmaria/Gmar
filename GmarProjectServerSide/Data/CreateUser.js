var User = require('../Models/User')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Yehuda:yehuda21@cluster0.bndyq.mongodb.net/<dbname>?retryWrites=true&w=majority";


var CreateUser = function(obj)
{
  var user = User.User;
  user.Name = obj.name;
  user.Password = obj.password;
  MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbo = db.db('Dayet');
    dbo.collection("Users").insertOne(user, function(err, res){
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});
}
module.exports = CreateUser;
