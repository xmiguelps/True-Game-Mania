using sys_cadastro.Entities.Products.Loja;

namespace sys_cadastro.UseCases.Products.Loja.Repository;

public interface IProductLojaRepository
{
    Task<IEnumerable<ProductLoja>> GetAllAsync(CancellationToken cancellationToken = default);

    Task<ProductLoja> GetByIdAsync(int id, CancellationToken cancellationToken = default);

    Task CreateAsync(ProductLoja productLoja ,CancellationToken cancellationToken = default);

    //PUT

    //DELETE
} 