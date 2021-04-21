const express = require('express')
var bluser = require('../Models/BlUser')
var GetDataController = express.Router();

GetDataController.post('/',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("We got the Day!!!");
    console.log(req.body);
    bluser.InsertData(req.body.Name,req.body.Day,req.body.CurrentWeight);
    res.send('Yaaap')
});

GetDataController.get('/getDataForUser/:userName',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    var userName = req.params.userName;
    bluser.sendData(userName,function(result){
        res.json(result);
        console.log('We Send The Data!!!')
    });
})

module.exports = GetDataController;