import express from "express";
import cors from "cors";
import postRoute from "./modules/items/posts.routes.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(postRoute);

app.listen(3030, () => console.log("Server running on port 3030"));
