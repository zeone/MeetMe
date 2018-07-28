using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BusinessLogic.DTO.Events;
using Models;

namespace BusinessLogic.Services.Interfaces
{
    public interface IEventService
    {
        Task<List<EventViewDto>> GetEvents(int index, int pageSize);
        Task<Event> GetEvent(int postId);
        Task<Event> AddEvent(Event post);
        Task<Event> UpdateEvent(Event evnt);
        Task DeleteEvent(int id);
    }
}
