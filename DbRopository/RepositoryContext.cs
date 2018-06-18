using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Models;

namespace DbRepository
{
    public class RepositoryContext : IdentityDbContext<User,ApplicationRole,Guid>
    {
        public DbSet<Event> Events { get; set; }

        public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options)
        {

        }
    }
}