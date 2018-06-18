using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DbRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DbRepository.Repositories
{
  public  class EventRepository:BaseRepository,IEventRepository
    {
        public EventRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory)
        {
        }

        public async Task<List<Event>> GetEvents(int index, int pageSize)
        {
            var result = new List<Event>();

            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Events.AsQueryable();
               
                result = await query.Skip(index * pageSize).Take(pageSize).ToListAsync();
            }

            return result;
        }

        public async Task<Event> GetEvent(int postId)
        {
            throw new NotImplementedException();
        }

     

        public async Task AddEvent(Event post)
        {
            throw new NotImplementedException();
        }
    }
}
