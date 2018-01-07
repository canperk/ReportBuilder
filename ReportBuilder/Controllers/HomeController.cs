using Microsoft.AspNetCore.Mvc;

namespace ReportBuilder.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
