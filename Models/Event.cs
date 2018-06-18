using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Models.Enums;

namespace Models
{
    public class Event
    {
        [Key]
        public int EventId { get; set; }
        public User Creator { get; set; }
        /// <summary>
        /// User's entered place
        /// </summary>
        public string Place { get; set; }
        public float? Longitude { get; set; }
        public float? Lattitude { get; set; }
        public string GooglePlace { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public PreferredGender PreferredGender { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public EventStatus Status { get; set; }

        public List<Subcategory> Subcategories { get; set; }
        public List<UserEvents> UserEvents { get; set; }
    }
}
