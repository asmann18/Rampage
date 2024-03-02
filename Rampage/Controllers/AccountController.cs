using Microsoft.AspNetCore.Mvc;

namespace Rampage.Controllers;

public class AccountController : Controller
{
    public IActionResult Login()
    {
        return View();
    }

    public IActionResult UserInfo()
    {
        return View();
    }

    public IActionResult Register()
    {
        return View();
    }
}


