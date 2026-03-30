using Microsoft.EntityFrameworkCore;
using sys_cadastro.Entities.Products.Cliente;
using sys_cadastro.Entities.Products.Loja;
using sys_cadastro.Entities.Users;

namespace sys_cadastro.Adpters.AppDb;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> Users => Set<User>();

    public DbSet<ProductCliente> ProductsCliente => Set<ProductCliente>();

    public DbSet<ProductLoja> ProductsLoja => Set<ProductLoja>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
    }
}