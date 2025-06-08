import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("userEntity")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column({ unique: true, nullable: true })
  cpf?: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  constructor(name: string, email: string, age: number, cpf?: string) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cpf = cpf;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
