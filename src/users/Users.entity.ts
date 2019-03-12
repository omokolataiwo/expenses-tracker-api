import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn() id: number;
  @Column({ length: 50 }) name: string;
  @Column( { length: 50 }) username: string;
  @Column( { length: 50 }) password: string;
}