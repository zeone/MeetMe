using System;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Event
    {
        [Key]
        public int Id { get; set; }
        public Guid CreatorId { get; set; }
        public Guid Subject { get; set; }
    }
}
