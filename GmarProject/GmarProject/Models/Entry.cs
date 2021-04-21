using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GmarProject.Models
{
    public class Entry
    {
        [DisplayName("שם משתמש")]
        [Required]
        public string Name { get; set; }
        [DisplayName("סיסמא")]
        [Required]
        public string Password { get; set; }
    }
}