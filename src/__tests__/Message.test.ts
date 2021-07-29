// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";

import { app } from "../app";
import { messageRepository } from "../repositories/MessageRepository";

describe("Message", () => {
  it("Should be able to create a new message", async () => {
    messageRepository.store = jest.fn().mockResolvedValue({
      encrypted_name:
        "$2a$08$k1vnoWItqnx2ZtB/svCsPeljjtCmo1/VDcR9A8ZK0ot2xCsPLHDfG",
      id: 3,
    });
    const response = await request(app).post("/message").send({
      name: "Message test example",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("encrypted_name");
  });

  it("Should not be able to create a message with no content", async () => {
    const response = await request(app).post("/message").send({
      name: "",
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("code");
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toMatch(/(name é obrigatório!)/i);
  });
});
