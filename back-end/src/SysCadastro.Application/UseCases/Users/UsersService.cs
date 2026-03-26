
using System.Net;
using sys_cadastro.Entities.Users;
using sys_cadastro.UseCases.Users.Dtos;
using sys_cadastro.UseCases.Users.Service.Interface;
using sys_cadastro.UseCases.Users.Repository;

namespace sys_cadastro.UseCases.Users.Service;

public class UsersService : IUserService
{
    public readonly IUserRepository _repository;

    public UsersService(IUserRepository repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<UserReadDto>> GetAllAsync(string? search, string? email)
    {
        var users = await _repository.GetAllAsync();
        if (search == "admin")
        {
            users = await _repository.GetAdminsAsync();
        } else if (email != null)
        {
            users = await _repository.GetAccountAsync(email);
        }
        return users.Select(u => new UserReadDto(u.Id, u.FirstName, u.Email));
    }

    public async Task<UserReadDto?> GetById(int id)
    {
        var user = await _repository.GetByIdAsync(id);
        
        if (user is null) return null;

        return new UserReadDto(user.Id, user.FirstName, user.Email);
    }

    public async Task<bool> CreateAsync(UserCreateDto dto)
    {
        if (dto.Email == null || dto.FirstName == null || dto.LastName == null || dto.Cpf == null || dto.Senha == null)
        {
            return false;   
        }

        var verif = _repository.GetAccountAsync(dto.Email);

        if (verif != null)
        {
            return false;
        }

        var user = new User(dto.FirstName, dto.LastName, dto.Cpf, dto.Email, dto.Senha, dto.IsAdmin.Value);

        await _repository.AddAsync(user);

        return true;
    }

    public async Task<bool> UpdateAsync(int id, UserUpdateDto dto, bool validacao)
    {
        var user = await _repository.GetByIdAsync(id);
        validacao = false;

        if (user == null)
        {
            validacao = true;
        }

        user.Update(dto.FirstName, dto.Email, dto.IsAdmin);

        await _repository.UpdateAsync(user);
        return validacao;
    }

    public async Task<bool> DeleteAsync(int id, bool validacao)
    {
        var user = await _repository.GetByIdAsync(id);
        validacao = false;

        if (user == null)
        {
            validacao = true;
            return validacao;
        }

        await _repository.DeleteAsync(user);
        return validacao;
    }
}