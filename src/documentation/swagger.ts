import { createMessage } from "./swagger-schemas/message";

export default {
  openapi: "3.0.0",
  info: {
    title: "Facile-Challenge-Backend",
    version: "1.0.0",
  },
  paths: {
    "/message": {
      post: createMessage,
    },
  },
};
