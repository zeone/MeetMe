using System.ComponentModel.DataAnnotations;

namespace BusinessLogic.DTO.Account
{
    public class ExternalLoginViewModel
    {
       
        [EmailAddress]
        public string Email { get; set; }
    }
}
