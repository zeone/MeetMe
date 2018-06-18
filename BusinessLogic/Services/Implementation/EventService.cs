using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessLogic.Services.Interfaces;
using DbRepository.Interfaces;
using Models;
using AutoMapper;
using BusinessLogic.DTO.Events;

namespace BusinessLogic.Services.Implementation
{
    public class EventService : IEventService
    {
        private IEventRepository _eventRepository;
        IMapper _mapper;

        public EventService(IEventRepository eRep, IMapper mapper)
        {
            _eventRepository = eRep;
            _mapper = mapper;
        }
        public async Task<List<EventViewDto>> GetEvents(int index, int pageSize)
        {
            var result = await _eventRepository.GetEvents(index, pageSize);
            var resp = result.Select(r => _mapper.Map<Event, EventViewDto>(r)).ToList();
            return resp;
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
