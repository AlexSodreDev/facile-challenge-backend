export const createMessage = {
  tags: ["Message"],
  summary: "Message Creation",
  description: "Set a message to database",

  consumes: "application/json",
  parameters: [
    {
      in: "body",
      name: "Message",
      description: "Receive the message",
      required: true,
      schema: {
        type: "object",
        required: "name",
        properties: {
          name: {
            type: "string",
            example: "Faz certo - que dá certo!",
          },
        },
      },
    },
  ],
  responses: {
    201: {
      description: "Created",
      content: {
        "application/json": {
          schema: {
            type: "object",
            items: {
              id: {
                type: "integer",
                example: 1,
              },
              name: {
                type: "string",
                example: "561651@1565#asd516",
              },
            },
          },
        },
      },
    },
    400: {
      code: "E_VALIDATION_FAILURE",
      message: "O campo nome é obrigatório!",
    },
  },
};
