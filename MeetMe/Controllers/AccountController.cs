using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using BusinessLogic.DTO.Account;
using MeetMe.Helpers;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Models;
using Newtonsoft.Json;

namespace MeetMe.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        [TempData]
        public string ErrorMessage { get; set; }

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
        //[HttpGet]
        //public IActionResult Register()
        //{
        //    return View();
        //}
        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                User user = new User { Email = model.Email, UserName = model.Email, Year = model.Year };
                // добавляем пользователя
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    // установка куки
                    await _signInManager.SignInAsync(user, false);
                    return Ok(model);
                }
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }

            }
            return BadRequest(ModelState);
        }

        //[HttpGet]
        //public IActionResult Login(string returnUrl = null)
        //{
        //    return View(new LoginViewModel { ReturnUrl = returnUrl });
        //}

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result =
                    await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, false);
                if (result.Succeeded)
                {
                    return Ok(model);

                }
                ModelState.AddModelError("", "Неправильный логин и (или) пароль");

            }
            return BadRequest(ModelState);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> LogOff()
        {
            // удаляем аутентификационные куки
            await _signInManager.SignOutAsync();
            return Ok();
        }
      
        /// <summary>
        /// prepare login via facebook etc
        /// </summary>
        /// <param name="provider"></param>
        /// <param name="returnUrl"></param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        //[ValidateAntiForgeryToken]
        public IActionResult ExternalLogin([FromBody]ExternalLoginModel model)
        {
            // Request a redirect to the external login provider.
            var redirectUrl = Url.Action(nameof(RegisterFBUser), "Account", new { model.ReturnUrl });
            var properties = _signInManager.ConfigureExternalAuthenticationProperties(model.Provider, redirectUrl);
            return Challenge(properties, model.Provider);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="returnUrl"></param>
        /// <param name="remoteError"></param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> GetToken([FromBody]ExternalLoginInfo info)
        {
            // Sign in the user with this external login provider if the user already has a login.
            var result = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, isPersistent: false, bypassTwoFactor: true);
            if (result.Succeeded)
            {
                var user = await _userManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);
                await _signInManager.SignInAsync(user, false);
                return Ok(await Token(user));
            }
            if (result.IsLockedOut)
            {
                return BadRequest("is locked");
            }
            else
            {
                // If the user does not have an account, then ask the user to create an account.
                // var email = info.Principal.FindFirstValue(ClaimTypes.Email);
                //in case if user dont'exsist
                return Unauthorized();
            }
        }
        /// <summary>
        /// Confirmation registration
        /// </summary>
        /// <param name="model">contain all nessasery information</param>
        /// <param name="returnUrl"></param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        //   [ValidateAntiForgeryToken]
        public async Task<IActionResult> RegisterFBUser([FromBody]RegisterUserModelDto model)
        {
            if (ModelState.IsValid)
            {
                var user = new User
                {
                    UserName = model.CustomUserInfo.Email,
                    Email = model.CustomUserInfo.Email,
                    UserLogo = model.CustomUserInfo.UserLogo,
                    FacebookId = model.CustomUserInfo.FacebookId
                };
                var result = await _userManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    result = await _userManager.AddLoginAsync(user, model.SysUserInfo);
                    if (result.Succeeded)
                    {
                        await _signInManager.SignInAsync(user, isPersistent: false);
                        return Ok(await Token(user));
                    }
                }
                AddErrors(result);
            }

            return BadRequest(ModelState);
        }


        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }


        #region JWT
        public async Task<JWTokenModel> Token(User user)
        {
            var identity = GetIdentity(user);
            if (identity == null)
            {
                Response.StatusCode = 400;
                await Response.WriteAsync("Invalid username or password.");
                return null;
            }

            var now = DateTime.UtcNow;
            // создаем JWT-токен
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    notBefore: now,
                    claims: identity.Claims,
                    expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new JWTokenModel
            {
                access_token = encodedJwt,
                username = identity.Name
            };

            // сериализация ответа
            //Response.ContentType = "application/json";
            //await Response.WriteAsync(JsonConvert.SerializeObject(response, new JsonSerializerSettings { Formatting = Formatting.Indented }));
            return response;
        }

        private ClaimsIdentity GetIdentity(User user)
        {
            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, user.Email)
                };
                ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }

            // если пользователя не найдено
            return null;
        }
        #endregion



    }

}