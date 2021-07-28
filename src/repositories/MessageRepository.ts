import { EntityRepository, Repository } from "typeorm";

import { Message } from "../models/MessageModel";

@EntityRepository(Message)
class MessageRepository extends Repository<Message> { }

export { MessageRepository };
