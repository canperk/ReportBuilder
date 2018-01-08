using System.Collections.Generic;

namespace ReportBuilder.Entities
{
    public class Supplier
    {
        public Supplier()
        {
            Products = new List<Product>();
        }
        public int SupplierId { get; set; }
        public string CompanyName { get; set; }
        public string Phone { get; set; }
        public string ContactTitle { get; set; }
        public string ContactName { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
