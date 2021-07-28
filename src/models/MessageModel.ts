import bcrypt from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("message")
class Message {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  encrypted_name: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.encrypted_name = bcrypt.hashSync(this.encrypted_name, 8);
  }
}

export { Message };
