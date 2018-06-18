using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace BusinessLogic.Services.Interfaces
{
  public  interface IEventService
    {
        Task<List<Event>> GetEvents(int index, int pageSize);
        Task<Event> GetEvent(int postId);
        Task AddEvent(Event post);
    }
}
