import { users, todos } from "./_db.js";

const resolvers = {
  Query: {
    hello: () => "Hello, World!",
    users: () => users,
    // if i have in schema query has parameters like get user by id
    // in resolve function take three parameters (_,args,context)
    // search about _ and context (toDo )
    // context is optional
    user: (_, { id }) => {
      return users.find((user) => user.id === parseInt(id));
    },
  },
  Mutation: {
    addUser(_, { newUser }) {
      //   const user = { ...newUser };
      users.push(newUser);
      return newUser;
    },
    // updateUser(id:Int, updatedUser:updatedUser):User
    updateUser(_, { id, updateUser }) {
      let user = users.findIndex((user) => user.id === parseInt(id));
      if (user !== -1) {
        users[user] = { ...users[user], ...updateUser };
        return users[user];
      }
      throw new Error("User not found");
    },
    deleteUser(_, { id }) {
      let user = users.findIndex((user) => user.id === parseInt(id));
      if (user !== -1) {
        users.splice(user, 1);
        return { message: "delete user successfully" };
      }
      return { message: "failed to delete" };
    },
  },
  User: {
    // here i will use the first  parameter so change _ to parent (any word)
    todos(parent) {
      return todos.filter((todo) => todo.userId == parent.id);
    },
  },
};

export default resolvers;
