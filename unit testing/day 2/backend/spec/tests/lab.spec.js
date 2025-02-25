const request = require("supertest");
const app = require("../..");
const { clearDatabase } = require("../../db.connection");

const req = request(app);

describe("lab testing:", () => {
  let fakeUser, userToken;
  beforeAll(async () => {
    fakeUser = {
      name: "ahmed",
      email: "ahmed@gmail.com",
      password: "asd123",
    };
    await req.post("/user/signup").send(fakeUser);
    let res = await req.post("/user/login").send(fakeUser);
    userToken = res.body.data;
  });
  beforeAll(async () => {
    // Assuming you have a route to create a todo
    let todoRes = await req
      .post("/todo")
      .set({ authorization: userToken })
      .send({ title: "original title", userId: fakeUser._id });
    createdTodo = todoRes.body.data;
  });
  describe("users routes:", () => {
    it("req to get(/user/search) ,expect to get the correct user with his name", async () => {
      const response = await req.get(`/user/search?name=ahmed`);

      expect(response.status).toBe(200);
      expect(response.body.data.name).toBe("ahmed");
    });
    it("req to get(/user/search) with invalid name ,expect res status and res message to be as expected", async () => {
      const response = await req.get(`/user/search?name=ali`);
      expect(response.status).toBe(200);
      expect(response.body.message).toBe("There is no user with name: ali");
    });
  });

  describe("todos routes:", () => {
    it("req to patch( /todo/) with id only ,expect res status and res message to be as expected", async () => {
      const response = await req
        .patch(`/todo/${fakeUser._id}`)
        .set({ authorization: userToken });
      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "must provide title and id to edit todo"
      );
    });
    it("req to patch( /todo/) with id and title ,expect res status and res to be as expected", async () => {
      const response = await req
        .patch(`/todo/${createdTodo._id}`)
        .set({ authorization: userToken })
        .send({ title: "updated title" });
      expect(response.status).toBe(200);
      expect(response.body.data.title).toBe("updated title");
    });
    // const getUserTodos = async (req, res) => {

    //     try {

    //       var todos = await todosModel.find({ userId: req.id })
    //       console.log('req.id: ', req.id);
    //       console.log('todos: ', todos);
    //       todos.length > 0 && res.status(200).json({ data: todos })
    //       todos.length == 0 && res.status(200).json({ message: "Couldn't find any todos for " + req.id })
    //     } catch (e) {
    //       res.status(400).json({ message: e.message })
    //     }
    //   }
    // router.get("/user",auth, getUserTodos)

    it("req to get( /todo/user) ,expect to get all user's todos", async () => {
      const response = await req
        .get(`/todo/user`)
        .set({ authorization: userToken });
      expect(response.status).toBe(200);
      expect(response.body.data.length).toBeGreaterThan(0);
    });
    it("req to get( /todo/user) ,expect to not get any todos for user hasn't any todo", async () => {
      const response = await req
        .get(`/todo/user`)
        .set({ authorization: userToken });
      expect(response.status).toBe(200);
    });
  });

  afterAll(async () => {
    await clearDatabase();
  });
});
