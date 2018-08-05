using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Models;

namespace BusinessLogic
{
    public interface IWorkingContext
    {
        HttpContext HttpContext { get; }
       User CurrentUser { get; }
    }
}
