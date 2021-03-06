import { Request, Response } from "express";

import { messageRepository } from "../repositories/MessageRepository";

class MessageController {
  async create(request: Request, response: Response) {
    try {
      const { name } = request.body;

      if (!name) {
        console.log("Erro de validação do name");
        return response.status(400).json({
          code: "E_VALIDATION_FAILURE",
          message: "O campo name é obrigatório!",
        });
      }

      const message = await messageRepository.store(name);

      return response.status(201).json(message);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: error });
    }
  }
}

export const messageController = new MessageController();
