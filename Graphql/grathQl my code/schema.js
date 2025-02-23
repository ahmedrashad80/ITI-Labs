// query and mutation
// query like get
// mutation like post or update or delete

// this is query has five types (string, boolean ,int ,float ,id)
const schema = `
  type Todo {
  id: Int
  title: String!
  completed: Boolean!
}
type User {
  name: String
  username: String
  email: String
  todos:[Todo]
}
  type response{
  message: String}

  type Query {
   hello: String
   users: [User]
   user(id:Int):User
  }
 type Mutation{
 addUser(newUser:newUser):User
 updateUser(id:Int, updateUser:updatedUser):User
 deleteUser(id:Int):response
 }
 input newUser{
  name:String!
  username:String!
  email:String!}

  input updatedUser{
  name:String
  username:String
  email:String}


  `;

export default schema;
