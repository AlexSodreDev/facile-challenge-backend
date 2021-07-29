import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class MessageTable1627599404876 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "message",

        columns: [
          {
            name: "id",

            type: "serial",

            isPrimary: true,
          },

          {
            name: "encrypted_name",

            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("message");
  }
}
