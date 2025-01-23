import connection from "./DB/connection.js";
import authRoutes from "./modules/auth/auth.controller.js";
import messageRoutes from "./modules/message/message.controller.js";
import userRoutes from "./modules/user/user.controller.js";

const bootstrap = (app, express) => {
  app.use(express.json());
  app.use("/uploads", express.static("upload"));
  app.get("/", (req, res) => {
    res.status(200).json({ massage: "welcome to our app" });
  });
  app.use("/auth", authRoutes);
  app.use("/user", userRoutes);
  app.use("/message", messageRoutes);

  connection();
  //   if the route doesn't exist then 404
  app.all("*", (req, res) => {
    res.status(404).json({ message: "Page not found" });
  });
};

export default bootstrap;
