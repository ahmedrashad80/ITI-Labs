import { Router } from "express";
import * as authService from "./service/auth.service.js";
import { validation } from "../../utilites/validation.js";
import { signInValidation, signUpValidation } from "./auth.validation.js";
const authRoutes = Router();

authRoutes.post("/signup", validation(signUpValidation), authService.register);
authRoutes.post("/login", validation(signInValidation), authService.login);
authRoutes.get("/confirm/:id", authService.confirmEmail);
export default authRoutes;
