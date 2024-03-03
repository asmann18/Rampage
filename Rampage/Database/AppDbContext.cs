using Microsoft.EntityFrameworkCore;
using Rampage.Database.DomainModels;

namespace Rampage.Database;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }


    public DbSet<Category> Categories { get; set; } = null!;
    public DbSet<Product> Products { get; set; } = null!;
    public DbSet<ProductImage> ProductImages { get; set; } = null!;
    public DbSet<ProductInfo> ProductInfos { get; set; } = null!;
    public DbSet<Color> Colors { get; set; } = null!;
}
