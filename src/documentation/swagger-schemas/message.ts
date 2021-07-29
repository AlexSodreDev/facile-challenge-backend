export const createMessage = {
  tags: ["Message"],
  summary: "Message Creation",
  description: "Set a message to database",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
          },
          example: {
            name: "Faz certo - que dá certo!",
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: "Created",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                example: 1,
              },
              encrypted_name: {
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
