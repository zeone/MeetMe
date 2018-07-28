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
        private readonly IEventRepository _eventRepository;
        readonly IMapper _mapper;
        private readonly IWorkingContext workingContext;
        public EventService(IEventRepository eRep, IMapper mapper, IWorkingContext workingContext)
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

        public async Task<Event> GetEvent(int postId)
        {
            return await _eventRepository.GetEvent(postId);
        }

        public async Task<Event> AddEvent(Event post)
        {
            post.Creator = workingContext.CurrentUser;
            return await _eventRepository.AddEvent(post);
        }

        public async Task<Event> UpdateEvent(Event evnt)
        {
            return await _eventRepository.UpdateEvent(evnt);
        }

        public async Task DeleteEvent(int id)
        {
            await _eventRepository.DeleteEvent(id);
        }
    }
}
