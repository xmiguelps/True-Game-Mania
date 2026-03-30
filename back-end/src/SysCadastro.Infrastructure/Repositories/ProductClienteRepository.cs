using Microsoft.EntityFrameworkCore;
using sys_cadastro.Adpters.AppDb;
using sys_cadastro.Entities.Products.Cliente;
using sys_cadastro.UseCases.Products.Cliente.Repository;

namespace sys_cadastro.Adpters.Products.Repository;

public class ProductClienteRepository : IProductClienteRepository
{
    private readonly AppDbContext _db;

    public ProductClienteRepository(AppDbContext db)
    {
        _db = db;
    }

    public async Task<IEnumerable<ProductCliente>> GetByUserAsync(CancellationToken cancellationToken = default)
    {
        return await _db.ProductsCliente
            .AsNoTracking()
            .ToListAsync(cancellationToken);
    }

    public async Task CreateAsync(ProductCliente productCliente, CancellationToken cancellationToken = default)
    {
        await _db.ProductsCliente.AddAsync(productCliente, cancellationToken);
        await _db.SaveChangesAsync(cancellationToken);
    }
}