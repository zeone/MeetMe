using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Http;
using System.Web;
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

        public User CurrentUser
        {
            get
            {
                User user = HttpContext?.User.Identity as User;
                return user;
            }
        }
    }
}
