using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace DbRepository.Interfaces
{
    public interface IEventRepository
    {
        Task<List<Event>> GetEvents(int index, int pageSize);
        Task<Event> GetEvent(int postId);
        Task AddEvent(Event post);
    }
}
