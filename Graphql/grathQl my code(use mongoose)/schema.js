// query and mutation
// query like get
// mutation like post or update or delete

// this is query has five types (string, boolean ,int ,float ,ID)
const schema = `

enum STATUS{
todo
done
in progress
}

type Todo{
id:ID
title:String
status:STATUS
userId:ID
}

type User {

  name: String
  role: String
  email: String
  todos:[Todo]
}


  type Query {
   users: [User]
   user(id:ID):User
   userTodo(id:ID):User
   getAllTodos:[Todo]

  }
 type Mutation{
 register(user:NewUser):User!
 login(user:login):String
 deleteUser(id:ID):String!
 updateUser(id:ID,updateUser:updatedUser):User
 updateTodo(id:ID,updateTodo:updatedTodo):Todo
 createTodo(todo:newTodo):Todo
 deleteTodo(id:ID):String!
 }
 input updatedTodo{
  title:String
  status:STATUS}
 input updatedUser{
  name:String
  password:String
  email:String}

 input NewUser{
  name:String!
  password:String!
  email:String!
  role:String
  }
 input login{
  password:String!
  email:String!
  }
  input newTodo{
  title:String!
  status:STATUS
  userId:ID

  }





  `;

export default schema;
