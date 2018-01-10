using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ReportBuilder.Api.Models;
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
        public IEnumerable<ProductDto> Get()
        {
            return _context.Products.Select(i => new ProductDto {
                Id = i.Id,
                Name = i.ProductName,
                Price = i.UnitPrice,
                Stock = i.UnitsInStock,
                Category = i.Category.CategoryName,
                Supplier = i.Supplier.CompanyName
            }).ToList();
        }
    }
}
