using System;
using System.Collections.Generic;

namespace CampaignManager.Models
{
    public class Participant
    {
        public int Id { get; set; }
        public int CampaignId { get; set; }
        public string Name { get; set; }
        public Country Country { get; set; }
        public Coalition Coalition { get; set; }
        public decimal Budget { get; set; }
        public List<int> LocationIds { get; set; }
    }
}