namespace sys_cadastro.UseCases.Users.Dtos;

public record UserCreateDto(string FirstName, string LastName, string Cpf, string Email, string Senha, bool? IsAdmin = false);

public record UserUpdateDto(string? FirstName, string? Email, bool? IsAdmin);

public record UserReadDto(int id, string FirstName, string Email);