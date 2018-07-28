using System;
using System.Collections.Generic;
using System.Text;
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
