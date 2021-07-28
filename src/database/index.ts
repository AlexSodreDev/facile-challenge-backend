import { createConnection } from "typeorm";

(async () => {
  const connection = await createConnection();
  console.log("📦 Sucessfully connected with database");
  await connection.synchronize();
})();
