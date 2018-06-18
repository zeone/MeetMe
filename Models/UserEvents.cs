using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Models.Enums;

namespace Models
{
    public class UserEvents
    {
        [Key]
        public int UserEventId { get; set; }
        public User UserId { get; set; }
        public Event EventId { get; set; }
        public VisitedEvetsStatus Status { get; set; }
    }
}
