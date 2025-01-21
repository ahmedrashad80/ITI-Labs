import { Router } from "express";
import {
  getPosts,
  addPosts,
  updatedPost,
  deletedPost,
} from "./controller/posts.controller.js";

const postRoute = Router();
postRoute.get("/Posts", getPosts);
postRoute.post("/Posts", addPosts);

postRoute.put("/Posts/:id", updatedPost);

postRoute.delete("/Posts/:id", deletedPost);
export default postRoute;
