import { Router } from "express";
import * as authService from "./service/auth.service.js";
const authRoutes = Router();

authRoutes.post("/signup", authService.register);
authRoutes.post("/login", authService.login);
authRoutes.get("/confirm/:id", authService.confirmEmail);
export default authRoutes;
