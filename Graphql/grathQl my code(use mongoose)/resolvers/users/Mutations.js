import { usersModel } from "../../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userMutations = {
  async register(_, { user }) {
    try {
      const newUser = await usersModel.create(user);
      return newUser;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async login(_, { user }) {
    try {
      const { email, password } = user;
      if (!email || !password)
        throw new Error("email and password are required");
      const returnUser = await usersModel.findOne({ email });
      if (!returnUser) throw new Error("User not found");
      const isMatch = await bcrypt.compare(password, returnUser.password);
      if (!isMatch) throw new Error("Invalid password");
      const token = jwt.sign(
        { id: returnUser._id, role: returnUser.role },
        process.env.SECRET
      );
      return token;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async updateUser(_, { id, updateUser }, context) {
    if (context.id) {
      try {
        const user = await usersModel.findById(id);
        if (!user) throw new Error("user not found");
        const updatedUser = await usersModel.findByIdAndUpdate(id, updateUser, {
          new: true,
        });
        return updatedUser;
      } catch (err) {
        throw new Error(err.message);
      }
    } else {
      throw new Error("unauthorized");
    }
  },
  async deleteUser(_, { id }, context) {
    if (context.role === "admin") {
      try {
        const deletedUser = await usersModel.findByIdAndDelete(id);
        if (!deletedUser) throw new Error("User not found");
        return "User deleted successfully";
      } catch (err) {
        throw new Error(err.message);
      }
    } else {
      return "Unauthorized access";
    }
  },
};

export default userMutations;
