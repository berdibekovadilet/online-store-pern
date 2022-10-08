class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res) {
    res.json({message: "Check working"})
  }
}

module.exports = new UserController();
