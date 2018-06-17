using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace MeetMe.Models
{
    public class MeetMeContext : IdentityDbContext<User>
    {
        public DbSet<Event> Events { get; set; }

        public MeetMeContext(DbContextOptions<MeetMeContext> options) : base(options)
        {

        }
    }
}
