import { todosModel } from "../../models/todo.js";
import { usersModel } from "../../models/user.js";

const todoQueries = {
  async userTodo(_, { id }) {
    try {
      const user = await usersModel.findById(id);
      if (!user) throw new Error("user not found");
      const todos = await todosModel.find({ userId: id });
      return user;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  async getAllTodos() {
    try {
      const allTodos = await todosModel.find({});
      return allTodos;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
export default todoQueries;
