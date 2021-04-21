using GmarProject.Models;
using GmarProjectData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace GmarProject.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        BLUser bL = new BLUser();
        [AllowAnonymous]
        public ActionResult Login()
        {
            return View();
        }
        [AllowAnonymous]
        [HttpPost]
        public ActionResult Login(Entry u, string retrunUrl)
        {

            try
            {
                if (bL.IsValid(u.Name, u.Password))
                {
                    FormsAuthentication.SetAuthCookie(u.Name, false);
                    if (bL.IsInRole(u.Name, "User"))
                        return RedirectToAction("Home","Home");
                    else
                        return View("NoEntry");
                }
                else
                    return View("NoEntry");
            }
            catch
            {
                return View("NoEntry");
            }

        }
        [AllowAnonymous]
        //תצוגת יצירת משתמש
        public ActionResult CreateUser()
        {
            return View();
        }
        [AllowAnonymous]
        //שליחת נתוני משתמש חדש
        [HttpPost]
        public ActionResult CreateUser(Entry entry)
        {
            Users user = new Users();
            user.UserName = entry.Name;
            user.Password = entry.Password;
            user.RoleName = "user";
                 
            try
            {
                user.RoleName = "user";
                bL.CreateLogin(user);
                return RedirectToAction("Home", "Home");
            }
            catch
            {
                return View("Exsite");
            }

        }

        public ActionResult SignOut()
        {
            FormsAuthentication.SignOut();
            Session.Clear();
            return RedirectToAction("Login");
        }



    }
}