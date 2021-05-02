var dataInsert = require('../Data/InsertData');

var UpdateAllUsers = function(){
    dataInsert.GetAllUsers(function(Users){
        for(i=0; i < Users.length; i++)
        {
            dataInsert.insertWeekToWeeks(Users[i].Name,Users[i].TempWeek);
        }
    });

};

var InsertData = function(userName,Day)
{
    dataInsert.insertNormolData(userName,Day);
}

var sendData = function(userName,sendToView)
{
    dataInsert.getDataForUser(userName,sendToView);
}

var UpdateProfile = function(Update){
    dataInsert.UpdateProfile(Update);
}

module.exports.UpdateAllUsers = UpdateAllUsers;
module.exports.InsertData = InsertData;
module.exports.sendData = sendData;
module.exports.UpdateProfile = UpdateProfile;
