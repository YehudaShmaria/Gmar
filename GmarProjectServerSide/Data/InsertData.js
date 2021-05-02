var Week = require('../Models/Week');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Yehuda:yehuda21@cluster0.bndyq.mongodb.net/<dbname>?retryWrites=true&w=majority";

var insertNormolData = function(UserName,Day)
{
  MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbo = db.db('Dayet');
    var myquery = { Name:UserName};
    var PushDay = { $push:{TempWeek: Day}};
    dbo.collection("Users").updateOne(myquery, PushDay, function(err, res){
      if (err) throw err;
      console.log("1 Day Is posh !!!");
      db.close();
    });
});
}

var GetAllUsers = function(UpdateUser)
{
  MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbo = db.db('Dayet');
     dbo.collection("Users").find({}).toArray(function(err, res){
       if (err) throw err;
       UpdateUser(res);
     });
});
}

var insertWeekToWeeks = function(UserName,Week)
{
  MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbo = db.db('Dayet');
    var myquery = { Name:UserName};
    var Phshweek = { $push: {Weeks: Week}}
    dbo.collection("Users").updateOne(myquery, Phshweek, function(err, res) {
      if (err) throw err;
      console.log("1 week Is posh !!!");
      DeleteTempWek(UserName)
    });
});
}

var DeleteTempWek = function(UserName)
{
  MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbo = db.db('Dayet');
    var myquery = { Name:UserName};
    var updateTempWeek =  {$set:{TempWeek:[]}}
     dbo.collection("Users").updateOne(myquery, updateTempWeek, function(err, res) {
       if (err) throw err;
       console.log("Temp Week is Updated to be empty!!!");
     });
});
}

var getDataForUser = function(userName,sendToView)
{
  MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbo = db.db('Dayet');
    var myquery = { Name:userName};
    dbo.collection("Users").findOne(myquery, function(err, res) {
      if (err) throw err;
      sendToView(res);
    db.close();
    });
});
}

var UpdateProfile = function(Update){
  MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbo = db.db('Dayet');
    var myquery = { Name:Update.Name};
    var newvalues  =  {$set:{Gender:Update.GenderUpdate, Purpose: Update.UpdatePurpose, WeightNow: Update.UpdateWeightNow, Weight:Update.UpdateWeight }}
     dbo.collection("Users").updateOne(myquery, newvalues, function(err, res) {
       if (err) throw err;
       console.log("Profile is Update!!!");
     });
});
}

module.exports.insertNormolData = insertNormolData;
module.exports.insertWeekToWeeks = insertWeekToWeeks;
module.exports.getDataForUser = getDataForUser;
module.exports.UpdateProfile = UpdateProfile;
module.exports.GetAllUsers = GetAllUsers;
