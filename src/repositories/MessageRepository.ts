import { EntityRepository, getCustomRepository, Repository } from "typeorm";

import { Message } from "../models/MessageModel";

@EntityRepository(Message)
class MessageRepository extends Repository<Message> {
  public async store(name: any) {
    const messageRepository = getCustomRepository(MessageRepository);

    const message = messageRepository.create({
      encrypted_name: name,
    });

    const messageCreated = await messageRepository.save(message);
    return messageCreated;
  }
}

export const messageRepository = new MessageRepository();
