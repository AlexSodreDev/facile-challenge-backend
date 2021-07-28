import { Router } from "express";

import { messageController } from "./controllers/MessageController";

const router = Router();

router.post("/message", messageController.create);

export { router };
