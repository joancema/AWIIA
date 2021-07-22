let _userService = null;

class UserController
{
    constructor({UserService})
    {
        _userService= UserService;

    }
    //TODO: implementar mEtodos
    //get
    async get(req, res)
    {
        const {userId} =  req.params;
        const user =  await  _userService.get(userId)
        return res.send(user);
    }
    //getAll
    async getAll( req ,res)
    {
        const users =   await _userService.getAll();
        return res.send(users);
    }

    //create

    //update

    //delete

}