using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Web;
using Microsoft.AspNetCore.Identity;
using BusinessLogic.Extensions;
using Models;

namespace BusinessLogic
{
    public class WorkingContext : IWorkingContext
    {
        private readonly IHttpContextAccessor httpContextAccessor;
        public WorkingContext(IHttpContextAccessor httpContextAccessor)
        {
            this.httpContextAccessor = httpContextAccessor;
        }
        public HttpContext HttpContext => httpContextAccessor.HttpContext;

        public User CurrentUser => HttpContext?.User.Identity as User;
    }
}
