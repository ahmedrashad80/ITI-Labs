import * as dotenv from "dotenv";
dotenv.config({});
import express from "express";
import bootstrap from "./src/app.controller.js";
import fs from "node:fs";
const app = express();
const port = process.env.PORT || 8888;

bootstrap(app, express);
const data = fs.readFileSync("db.txt", "utf-8");
console.log(data);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
