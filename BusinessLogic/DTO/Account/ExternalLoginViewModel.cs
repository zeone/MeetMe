using System.ComponentModel.DataAnnotations;

namespace BusinessLogic.DTO.Account
{
    public class ExternalLoginViewModel
    {
       
        [EmailAddress]
        public string Email { get; set; }

        public string UserLogo { get; set; }
        public long? FacebookId { get; set; }
    }
}
