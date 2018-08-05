using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLogic;
using BusinessLogic.DTO.Events;
using BusinessLogic.Services.Interfaces;
using MeetMe.Extensions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace MeetMe.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Produces("application/json")]
    [Route("api/Event")]
    public class EventController : Controller
    {
        private IEventService _eventService;
        private IWorkingContext workingContext;

        private readonly UserManager<User> _userManager;
        public EventController(IEventService _eService, IWorkingContext workingContext, UserManager<User> userManager)
        {
            _eventService = _eService;
            _userManager = userManager;
            this.workingContext = workingContext;
        }
        // GET: api/Events
        [HttpGet("[action]")]
        public async Task<ActionResult<List<EventViewDto>>> Events([FromQuery]int index, [FromQuery] int pageSize)
        {
            return await _eventService.GetEvents(index, pageSize);
        }

        // GET: api/Event/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<Event> Get(int id)
        {
            return await _eventService.GetEvent(id);
        }

        // POST: api/Event
        [HttpPost]
        public async Task<Event> Post(Event evnt)
        {
            var userId = HttpContext.User.GetUserName();
           // var user = _userManager.
           evnt.Creator= await _userManager.FindByNameAsync(HttpContext.User.GetUserName());
            evnt.CreationDate = DateTime.Now;
            return await _eventService.AddEvent(evnt);
        }

        // PUT: api/Event/5
        [HttpPut]
        public async Task<Event> Put(Event evnt)
        {
            return await _eventService.UpdateEvent(evnt);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _eventService.DeleteEvent(id);

        }
    }
}
