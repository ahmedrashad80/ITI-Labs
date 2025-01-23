import { Router } from "express";
import * as messageService from "./services/message.services.js";
import { validation } from "../../utilites/validation.js";
import { addMessageSchema } from "./message.validation.js";
import { authenticateToken } from "../../utilites/authMiddleware.js";

const messageRoutes = Router();

messageRoutes.get("/:id", authenticateToken, messageService.getMessages);
messageRoutes.post(
  "/",
  authenticateToken,
  validation(addMessageSchema),
  messageService.addMessage
);
messageRoutes.delete("/:id", authenticateToken, messageService.deleteMessage);
export default messageRoutes;
