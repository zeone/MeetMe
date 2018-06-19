using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace MeetMe.Helpers
{
    public class AuthOptions
    {
        public const string ISSUER = "PersonalPortal";
        public const string AUDIENCE = "PortalUser";
        const string KEY = "authentification_security_key!qwe123";
        public const int LIFETIME = 1;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
