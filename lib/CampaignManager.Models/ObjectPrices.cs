using System;
using System.Collections.Generic;

namespace CampaignManager.Models
{
    public class ObjectPrices
    {
        public int Id { get; set; }
        public int CampaignId { get; set; }
        public int ObjectId { get; set; }
        public decimal Price { get; set; }
    }
}