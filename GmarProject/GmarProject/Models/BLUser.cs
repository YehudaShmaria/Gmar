using GmarProjectData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GmarProject.Models
{
    public class BLUser
    {
        public string[] GetRoleForUser(string userName)
        {
            using (GmarProjectEntities entities = new GmarProjectEntities())
            {
                string[] roles = (from i in entities.Users
                                  where i.UserName == userName
                                  select i.RoleName).ToArray();

                return roles;
            }
        }

        public bool IsInRole(string name, string role)
        {
            using (GmarProjectEntities entities = new GmarProjectEntities())
            {
                return entities.Users.Any(i => i.UserName == name && i.RoleName == role);
            }
        }

        public bool IsValid(string username, string password)
        {
            using (GmarProjectEntities entities = new GmarProjectEntities())
            {
                return entities.Users.Any(i => i.UserName == username && i.Password == password);
            }
        }

        //יצירת משתמש חדש
        public void CreateLogin(Users user)
        {
            using (GmarProjectEntities entities = new GmarProjectEntities())
            {
                Role role = entities.Role.FirstOrDefault(i => i.RoleName == user.RoleName);
                entities.User.Add(new User { UserName = user.UserName, Password = user.Password, Role = role });
                entities.SaveChanges();
            }
        }

    }
   
}