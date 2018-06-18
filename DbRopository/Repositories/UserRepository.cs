using DbRepository.Interfaces;

namespace DbRepository.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory)
        {
        }
    }
}
