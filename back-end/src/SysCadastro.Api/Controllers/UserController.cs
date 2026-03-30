using Microsoft.AspNetCore.Mvc;
using sys_cadastro.UseCases.Users.Dtos;
using sys_cadastro.UseCases.Users.Service.Interface;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;
    
    public UsersController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] string? search, string? email)
    {
        var users = await _userService.GetAllAsync(search);
        if (email != null)
        {
            var userByEmail = await _userService.GetByEmail(email);
            return Ok(userByEmail);
        }
        return Ok(users);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var user = await _userService.GetById(id);
        if (user is null) return NotFound();
        return Ok(user);   
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] UserCreateDto dto)
    {
        bool validacao = await _userService.CreateAsync(dto);
        if (validacao != true) return BadRequest();
        return Ok(); 
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] UserUpdateDto dto)
    {
        bool validacao = false;
        validacao = await _userService.UpdateAsync(id, dto, validacao);
        if (validacao == false) return BadRequest();
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        bool validacao = false;
        validacao = await _userService.DeleteAsync(id, validacao);
        if (validacao == true) return BadRequest();
        return Ok();
    }
}