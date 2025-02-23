import { todosModel } from "../../models/todo.js";
import { usersModel } from "../../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const todoMutations = {
  async createTodo(_, { todo }) {
    try {
      const { userId } = todo;
      console.log(todo);

      const user = await usersModel.findOne({ _id: userId });
      if (!user) throw new Error("User not found");
      const newTodo = await todosModel.create(todo);
      return newTodo;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async updateTodo(_, { id, updateTodo }, context) {
    if (context.id) {
      try {
        const user = await todosModel.findById(id);
        if (!user) throw new Error("todo not found");
        const updatedTodo = await todosModel.findByIdAndUpdate(id, updateTodo, {
          new: true,
        });
        return updatedTodo;
      } catch (err) {
        throw new Error(err.message);
      }
    } else {
      throw new Error("unauthorized");
    }
  },
  async deleteTodo(_, { id }, context) {
    if (context.id) {
      try {
        const deletedTodo = await todosModel.findByIdAndDelete(id);
        if (!deletedTodo) throw new Error("todo not found");
        return "todo deleted successfully";
      } catch (err) {
        throw new Error(err.message);
      }
    } else {
      return "Unauthorized access";
    }
  },
};

export default todoMutations;
