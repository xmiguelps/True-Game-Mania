using sys_cadastro.Entities.Users;

namespace sys_cadastro.UseCases.Users.Repository;

public interface IUserRepository
{
    Task<IEnumerable<User>> GetAllAsync(CancellationToken cancellationToken = default);
    Task<IEnumerable<User>> GetAdminsAsync(CancellationToken cancellationToken = default);
    Task<IEnumerable<User>> GetAccountAsync(string? email ,CancellationToken cancellationToken = default);
    Task<User?> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    Task AddAsync(User user, CancellationToken cancellationToken = default);
    Task UpdateAsync(User user, CancellationToken cancellationToken = default);
    Task DeleteAsync(User user, CancellationToken cancellationToken = default);
}