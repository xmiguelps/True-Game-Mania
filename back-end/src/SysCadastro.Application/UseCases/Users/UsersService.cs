
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

    public async Task<IEnumerable<UserReadDto>> GetAllAsync(string? search)
    {
        var users = await _repository.GetAllAsync();
        if (search == "admin")
        {
            users = await _repository.GetAdminsAsync();
        }
        return users.Select(u => new UserReadDto(u.Id, u.FirstName, u.LastName, u.Cpf, u.Email, u.Senha, u.IsAdmin));
    }

    public async Task<UserReadDto?> GetById(int id)
    {
        var user = await _repository.GetByIdAsync(id);
        
        if (user is null) return null;

        return new UserReadDto(user.Id, user.FirstName, user.LastName, user.Cpf, user.Email, user.Senha, user.IsAdmin);
    }

    public async Task<UserReadDto> GetByEmail(string email)
    {
        var user = await _repository.GetAccountAsync(email);
        
        if (user is null) return null;

        return new UserReadDto(user.Id, user.FirstName, user.LastName, user.Cpf, user.Email, user.Senha, user.IsAdmin);
    }

    public async Task<bool> CreateAsync(UserCreateDto dto)
    {
        var verif = await _repository.GetAccountAsync(dto.Email);

        if (dto.Email == null || dto.FirstName == null || dto.LastName == null || dto.Cpf == null || dto.Senha == null)
        {
            return false;   
        } else if (verif != null)
        {
            return false;
        } else
        {
            var user = new User(dto.FirstName, dto.LastName, dto.Cpf, dto.Email, dto.Senha, dto.IsAdmin.Value);

            await _repository.AddAsync(user);

            return true;
        }
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