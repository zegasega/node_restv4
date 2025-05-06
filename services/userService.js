const User = require('../models/user');
const { hashPassword } = require('../utils/utils');

class UserService {
  static async createUser(data) {
    data.password = await hashPassword(data.password);
    const user = await User.create(data);
    return user;
  }

  static async getAllUsers() {
    const users = await User.findAll();
    return users;
  }

  static async getUserByID(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  static async deleteUserByID(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    const deletedUser = await user.destroy();
    return { message: "User Successfully Deleted", user: deletedUser };
  }

  static async updateUserByID(id, updateData) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }

    if (updateData.password) {
      updateData.password = await hashPassword(updateData.password);
    }

    await user.update(updateData);
    return user;
  }
}

module.exports = UserService;
