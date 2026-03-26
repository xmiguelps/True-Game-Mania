using sys_cadastro.UseCases.Users.Dtos;

namespace sys_cadastro.UseCases.Users.Service.Interface;

public interface IUserService
{
    Task<IEnumerable<UserReadDto>> GetAllAsync(string? search, string? email);
    Task<UserReadDto?> GetById(int id);
    Task<bool> CreateAsync(UserCreateDto dto);
    Task<bool> UpdateAsync(int id, UserUpdateDto dto, bool validacao);
    Task<bool> DeleteAsync(int id, bool validacao);
}