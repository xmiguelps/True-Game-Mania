using sys_cadastro.Entities.Products.Cliente;

namespace sys_cadastro.UseCases.Products.Cliente.Repository;

public interface IProductClienteRepository
{
    Task<IEnumerable<ProductCliente>> GetByUserAsync(CancellationToken cancellationToken = default);

    Task CreateAsync(ProductCliente productCliente, CancellationToken cancellationToken = default);
}