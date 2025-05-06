class UserService {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    getAllUsers() {
        return this.users;
    }

    getUserById(userId) {
        return this.users.find(user => user.id === userId);
    }

    deleteUser(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    }
}

module.exports = UserService;
