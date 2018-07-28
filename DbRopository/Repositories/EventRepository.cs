using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DbRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DbRepository.Repositories
{
    public class EventRepository : BaseRepository, IEventRepository
    {
        public EventRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory)
        {
        }

        public async Task<List<Event>> GetEvents(int index, int pageSize)
        {
            var result = new List<Event>();

            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Events.Include(r => r.Subcategories).Include(q => q.Creator).AsQueryable();

                result = await query.Skip(index * pageSize).Take(pageSize).ToListAsync();
            }

            return result;
        }

        public async Task<Event> GetEvent(int postId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Events.FindAsync(postId);
            }
        }



        public async Task<Event> AddEvent(Event post)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                try
                {
                    await context.Events.AddAsync(post);
                    await context.SaveChangesAsync();
                    return post;
                }
                catch (Exception e)
                {
                    throw new Exception(e.Message);
                }

            }
        }

        public async Task<Event> UpdateEvent(Event evnt)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                try
                {
                    context.Events.Update(evnt);
                    await context.SaveChangesAsync();
                    return evnt;
                }
                catch (Exception e)
                {
                    throw new Exception(e.Message);
                }

            }
        }

        public async Task DeleteEvent(int id)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var envnt = await context.Events.FindAsync(id);
                context.Events.Remove(envnt);
                await context.SaveChangesAsync();
            }
        }
    }
}
