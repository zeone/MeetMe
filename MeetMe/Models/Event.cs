using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MeetMe.Models
{
    public class Event
    {
        [Key]
        public int Id { get; set; }
        public Guid CreatorId { get; set; }
        public Guid Subject { get; set; }
    }
}
