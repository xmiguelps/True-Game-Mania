namespace sys_cadastro.Entities.Users;

public class User
{
    public User() { }
    public int Id {get; set;}

    public string FirstName {get; set;}

    public string LastName {get; set;}

    public string Cpf {get; set;}

    public string Email {get; set;}

    public string Senha {get; set;}

    public bool IsAdmin {get; set;}

    public User(string firstname, string lastname, string cpf, string email, string senha , bool isAdmin)
    {
        FirstName = firstname;
        LastName = lastname;
        Cpf = cpf;
        Email = email;
        Senha = senha;
        IsAdmin = isAdmin;
    }
    
    public void Update(string? firstname, string? email, bool? isAdmin)
    {
        if (!string.IsNullOrWhiteSpace(firstname)) FirstName = firstname;
        if (!string.IsNullOrWhiteSpace(email)) Email = email;
        if (isAdmin.HasValue) IsAdmin = isAdmin.Value;
    }
}