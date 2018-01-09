using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ReportBuilder.Entities;

namespace ReportBuilder.Api.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly NorthwindContext _context;
        public ProductController(NorthwindContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _context.Products.ToList();
        }
    }
}
