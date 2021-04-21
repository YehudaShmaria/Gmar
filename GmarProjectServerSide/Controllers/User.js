const express = require('express')
const Create = require('../Data/CreateUser');
var UserController = express.Router();
UserController.post('/create',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    Create(req.body);
    console.log('Created!!!!')
});

module.exports = UserController;