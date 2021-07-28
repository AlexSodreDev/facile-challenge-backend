import { Router } from "express";
import swaggerUi from "swagger-ui-express";

import { messageController } from "./controllers/MessageController";
import swaggerDocument from "./documentation/swagger";

const router = Router();

router.post("/message", messageController.create);

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { router };
