using System.Globalization;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using sys_cadastro.Adpters.AppDb;
using sys_cadastro.Entities.Users;
using sys_cadastro.UseCases.Users.Repository;

namespace sys_cadastro.Adpters.Users.Repository;
public class UserRepository : IUserRepository
{
    private readonly AppDbContext _db;

    public UserRepository(AppDbContext db)
    {
        _db = db;
    }

    public async Task<IEnumerable<User>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await _db.Users
            .AsNoTracking()
            .ToListAsync(cancellationToken);
    }

    public async Task<User> GetAccountAsync(string email, CancellationToken cancellationToken = default)
    {
        return await _db.Users
            .FirstOrDefaultAsync(u => u.Email == email, cancellationToken);
    }

    public async Task<IEnumerable<User>> GetAdminsAsync(CancellationToken cancellationToken = default)
    {
        return await _db.Users
            .AsNoTracking()
            .Where(u => u.IsAdmin)
            .ToListAsync(cancellationToken);
    }

    public async Task<User?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _db.Users.FindAsync([id], cancellationToken);
    }

    public async Task AddAsync(User user, CancellationToken cancellationToken = default)
    {
        await _db.Users.AddAsync(user, cancellationToken);
        await _db.SaveChangesAsync(cancellationToken);
    }

    public async Task UpdateAsync(User user, CancellationToken cancellationToken = default)
    {
        _db.Users.Update(user);
        await _db.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteAsync(User user, CancellationToken cancellationToken = default)
    {
        _db.Users.Remove(user);
        await _db.SaveChangesAsync(cancellationToken);
    }
}