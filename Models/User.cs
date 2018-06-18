using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Models
{
    public class User : IdentityUser<Guid>
    {
        public int Year { get; set; }
    }
}
