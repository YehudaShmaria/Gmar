var dataInsert = require('../Data/InsertData');


var InsertData = function(userName,Day,CurrentWeight)
{
    if(CurrentWeight == 0)
    {
        dataInsert.insertNormolData(userName,Day);
    }
    else
    {
        dataInsert.insert7Data(userName,Day,CurrentWeight)
    }
}

var sendData = function(userName,sendToView)
{
    dataInsert.getDataForUser(userName,sendToView);
}

module.exports.InsertData = InsertData;
module.exports.sendData = sendData;
