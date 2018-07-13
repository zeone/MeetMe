using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLogic.DTO.Events;
using BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace MeetMe.Controllers
{
    [Produces("application/json")]
    [Route("api/Event")]
    public class EventController : Controller
    {
        private IEventService _eventService;
        public EventController(IEventService _eService)
        {
            _eventService = _eService;
        }
        // GET: api/Event
        [HttpGet("[action]")]
        public async Task<List<EventViewDto>> GetAll(int index, int pageSize)
        {
            return await _eventService.GetEvents(index, pageSize);
        }

        // GET: api/Event/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "str;";
        }

        // POST: api/Event
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Event/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
