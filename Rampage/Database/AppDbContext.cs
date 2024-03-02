using Microsoft.EntityFrameworkCore;

namespace Rampage.Database;

public class AppDbContext:DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
    {
        
    }
}
