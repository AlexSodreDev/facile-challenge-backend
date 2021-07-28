import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { MessageRepository } from "../repositories/MessageRepository";

class MessageController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({
        code: "E_VALIDATION_FAILURE",
        message: "O campo name é obrigatório!",
      });
    }
    const messageRepository = getCustomRepository(MessageRepository);

    const message = messageRepository.create({
      encrypted_name: name,
    });

    await messageRepository.save(message);

    return response.status(201).json(message);
  }
}

export const messageController = new MessageController();
