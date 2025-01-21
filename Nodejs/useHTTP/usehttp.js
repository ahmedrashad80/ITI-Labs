// using http (create user array )
// User end points
// 1- GetAllUsers
// 2- AddUser
// 3- Get all users sorted alphabetically by name
// 4- delete user
// 5- update user
// 6- search user by id
import { createServer } from "node:http";
const user = [
  {
    id: 1,
    name: "mohamed",
    email: "mohamed@example.com",
  },
  {
    id: 2,
    name: "ahmed",
    email: "ahmed@example.com",
  },
];
const sendRes = (res, status, data) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};
const server = createServer((req, res) => {
  const { method, url } = req;
  if (method === "GET" && url === "/users") {
    sendRes(res, 200, user);
  } else if (method === "POST" && url === "/users") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const newUser = JSON.parse(body);
      newUser.id = user.length ? user[user.length - 1].id + 1 : 1;
      user.push(newUser);
      sendRes(res, 201, newUser);
    });
  } else if (method === "PUT" && url.startsWith("/users")) {
    const id = parseInt(url.split("/")[2]);
    const wantedUser = user.find((user) => user.id === id);
    if (!wantedUser) {
      sendRes(res, 404, { message: "User not found" });
      return;
    }
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const updateUser = JSON.parse(body);
      wantedUser.name = updateUser.name;
      wantedUser.email = updateUser.email;
      sendRes(res, 200, wantedUser);
    });
  } else if (method === "DELETE" && url.startsWith("/users")) {
    const id = parseInt(url.split("/")[2]);
    const userIndex = user.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      sendRes(res, 404, { message: "User not found" });
      return;
    }
    const deletedUser = user.splice(userIndex, 1)[0];
    sendRes(res, 200, { message: "User deleted", user: deletedUser });
  } else if (method === "GET" && url === "/users/sort/name") {
    const sortedUsers = [...user].sort((a, b) => a.name.localeCompare(b.name));
    sendRes(res, 200, sortedUsers);
  } else if (method === "GET" && url.startsWith("/users/search/")) {
    const id = parseInt(url.split("/")[3]);
    const searchedUser = user.find((user) => user.id === id);
    if (!searchedUser) {
      sendRes(res, 404, { message: "User not found" });
      return;
    }
    sendRes(res, 200, searchedUser);
  }
});

server.listen(3050, () => {
  console.log("Server running on port 3050");
});
