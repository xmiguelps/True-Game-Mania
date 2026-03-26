
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using sys_cadastro.Entities.Users;

namespace sys_cadastro.Adpters.Users.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(p => p.Id);
        builder.Property(p => p.Id).ValueGeneratedOnAdd();
        builder.Property(p => p.FirstName).HasMaxLength(150).IsRequired();
        builder.Property(p => p.LastName).HasMaxLength(150).IsRequired();
        builder.Property(p => p.Cpf).HasMaxLength(14).IsRequired();
        builder.Property(p => p.Email).HasMaxLength(250).IsRequired();
        builder.Property(p => p.Senha).HasMaxLength(100).IsRequired();
        builder.Property(p => p.IsAdmin).HasDefaultValue(false);
    }
}