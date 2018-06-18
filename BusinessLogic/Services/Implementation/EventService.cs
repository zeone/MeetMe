using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BusinessLogic.Services.Interfaces;
using DbRepository.Interfaces;
using Models;

namespace BusinessLogic.Services.Implementation
{
    public class EventService : IEventService
    {
        private IEventRepository _eventRepository;

        public EventService(IEventRepository _eRep)
        {
            _eventRepository = _eRep;
        }
        public async Task<List<Event>> GetEvents(int index, int pageSize)
        {
            return await _eventRepository.GetEvents(index, pageSize);
        }

        public Task<Event> GetEvent(int postId)
        {
            throw new NotImplementedException();
        }

        public Task AddEvent(Event post)
        {
            throw new NotImplementedException();
        }
    }
}
