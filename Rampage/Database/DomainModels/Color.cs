using Rampage.Database.Abstracts;
using System.ComponentModel.DataAnnotations;

namespace Rampage.Database.DomainModels;

public class Color : BaseEntity, IEntity
{
    [Required(ErrorMessage = "Renk adı gereklidir.")]
    [StringLength(128, MinimumLength = 3, ErrorMessage = "Renk adı en az 3 en fazla 128 karakter olmalıdır.")]
    public string Name { get; set; } = null!;
}
