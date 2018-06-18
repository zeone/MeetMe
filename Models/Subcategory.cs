using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
  public class Subcategory
    {
        [Key]
        public int SubcatId { get; set; }
        public string Name { get; set; }
    }
}
