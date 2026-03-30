using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using sys_cadastro.Entities.Products.Loja;

namespace sys_cadastro.Adpters.Products.Loja.Configuration;

public class ProductLojaConfiguration : IEntityTypeConfiguration<ProductLoja>
{
    public void Configure(EntityTypeBuilder<ProductLoja> builder)
    {
        builder.HasKey(p => p.Id);
        builder.Property(p => p.Id).ValueGeneratedOnAdd();
        builder.Property(p => p.Name).HasMaxLength(255).IsRequired();
        builder.Property(p => p.Price).IsRequired();
        builder.Property(p => p.Src).HasMaxLength(255).IsRequired();
    }
}