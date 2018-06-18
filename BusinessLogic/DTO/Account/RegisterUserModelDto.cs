using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace BusinessLogic.DTO.Account
{
    public class RegisterUserModelDto
    {
        public ExternalLoginViewModel CustomUserInfo { get; set; }
        public ExternalLoginInfo SysUserInfo { get; set; }
    }
}
