using System;
using System.Collections.Generic;

namespace CampaignManager.Models
{
    public class Mission
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Campaign Campaign { get; set; }
        public string Description { get; set; }
        public Faction Faction { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public List<Objective> Objectives { get; set; }
        public bool IsActive { get; set; }
    }
}