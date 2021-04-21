using GmarProject.Models;
using GmarProjectData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace GmarProject.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        
        public ActionResult Home()
        {
            BLUser bLUser = new BLUser();
            return View();
        }

        public ActionResult EntryData()
        {
            return View(); 
        }

        public ActionResult Recipe()
        {
            return View();
        }

        public ActionResult WeeklySummary()
        {
            return View();
        }

        public ActionResult MachineLearning()
        {
            return View();
        }

        public ActionResult Contact()
        {
            return View();
        }

        public ActionResult MyProfile()
        {
            return View();
        }

    }
}