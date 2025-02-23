import { Router } from "express";
import * as userService from "./services/user.services.js";
import { authenticateToken } from "../../utilites/authMiddleware.js";
import multer from "multer";
const userRoutes = Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

userRoutes.post(
  "/upload-image",
  authenticateToken,
  upload.single("image"),
  userService.uploadImage
);
userRoutes.put("/", authenticateToken, userService.updateUser);

export default userRoutes;
