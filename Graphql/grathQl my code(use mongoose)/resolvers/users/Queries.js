import { todosModel } from "../../models/todo.js";
import { usersModel } from "../../models/user.js";

const userQueries = {
  async users() {
    try {
      const users = await usersModel.find({});
      return users;
    } catch (err) {
      throw new Error("Error fetching users");
    }
  },
  async user(_, { id }) {
    try {
      const users = await usersModel.findById(id);
      if (!users) throw new Error("User not found");
      return users;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default userQueries;
