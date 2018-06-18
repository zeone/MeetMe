using Microsoft.EntityFrameworkCore;

namespace DbRepository
{
    public static class DbInitializer
    {
        public static void Initialize(RepositoryContext context)
        {
            context.Database.Migrate();
        }
    }
}
