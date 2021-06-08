var dataInsert = require('../Data/InsertData');
const { User } = require('./User');

var UpdateAllUsers = function(){
    dataInsert.GetAllUsers(function(Users){
        for(i=0; i < Users.length;i++)
        {
            if(Users[i].TempWeek != 0)
            {
                let Name = Users[i].Name;
                let Tempweek = Users[i].TempWeek;
                let data = {
                        CurrentWeight:Users[i].WeightNow
                }
                dataInsert.insertNormolData(Users[i].Name,data);
                setTimeout(function() {
                dataInsert.insertWeekToWeeks(Name,Tempweek);
               }, 5000);
            }
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

