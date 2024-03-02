using Microsoft.AspNetCore.Mvc;

namespace Rampage.Controllers;

public class BlogController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}


