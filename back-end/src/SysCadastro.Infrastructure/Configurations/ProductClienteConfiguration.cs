using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using sys_cadastro.Entities.Products.Cliente;

namespace sys_cadastro.Adpters.Products.Cliente.Configuration;

public class ProductClienteConfiguration : IEntityTypeConfiguration<ProductCliente>
{
    public void Configure(EntityTypeBuilder<ProductCliente> builder)
    {
        builder.HasKey(p => p.Id);
        builder.Property(p => p.Id).ValueGeneratedOnAdd();
        builder.Property(p => p.IdUser).IsRequired();
        builder.Property(p => p.Name).HasMaxLength(255).IsRequired();
        builder.Property(p => p.Price).IsRequired();
        builder.Property(p => p.Src).HasMaxLength(500).IsRequired();
    }
}