class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    createUser(req, res) {
        const user = req.body; // Örneğin bir POST isteği ile gelen kullanıcı verisi
        this.userService.addUser(user);
        res.status(201).send(`User ${user.name} added successfully!`);
    }

    listUsers(req, res) {
        const users = this.userService.getAllUsers();
        res.status(200).json(users);
    }

    getUser(req, res) {
        const userId = parseInt(req.params.id);
        const user = this.userService.getUserById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send(`User with ID ${userId} not found.`);
        }
    }

    deleteUser(req, res) {
        const userId = parseInt(req.params.id);
        this.userService.deleteUser(userId);
        res.status(200).send(`User with ID ${userId} deleted.`);
    }
}

module.exports = UserController;
