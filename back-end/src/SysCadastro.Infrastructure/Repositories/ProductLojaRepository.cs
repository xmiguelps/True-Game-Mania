using Microsoft.EntityFrameworkCore;
using sys_cadastro.Adpters.AppDb;
using sys_cadastro.Entities.Products.Loja;
using sys_cadastro.UseCases.Products.Loja.Repository;

namespace sys_cadastro.Adpters.Products.Loja.Repository;

public class ProductLojaRepository : IProductLojaRepository
{
    private readonly AppDbContext _db;

    public ProductLojaRepository(AppDbContext db)
    {
        _db = db;
    }

    public async Task<IEnumerable<ProductLoja>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await _db.ProductsLoja
            .AsNoTracking()
            .ToListAsync(cancellationToken);
    }

    public async Task<ProductLoja?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _db.ProductsLoja.FindAsync([id], cancellationToken);
    }

    public async Task CreateAsync(ProductLoja productLoja ,CancellationToken cancellationToken = default)
    {
        await _db.AddAsync(productLoja, cancellationToken);
        await _db.SaveChangesAsync(cancellationToken);
    }
}