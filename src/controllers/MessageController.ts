import { Request, Response } from "express";

import { messageRepository } from "../repositories/MessageRepository";

class MessageController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({
        code: "E_VALIDATION_FAILURE",
        message: "O campo name é obrigatório!",
      });
    }

    const message = await messageRepository.store(name);

    return response.status(201).json(message);
  }
}

export const messageController = new MessageController();
