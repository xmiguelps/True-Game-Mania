using sys_cadastro.Entities.Products.Cliente;

namespace sys_cadastro.UseCases.Products.Service.Interface;

public interface IProductClienteService
{
    Task<IEnumerable<ProductCliente>> GetByUserAsync(string user);

    Task CreateAsync(ProductCliente productCliente);
}