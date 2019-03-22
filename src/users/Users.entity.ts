import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn() id: number;
  @Column({ length: 50 }) firstName: string;
  @Column({ length: 50}) lastName: string;
  @Column( { length: 50 }) userName: string;
  @Column( { length: 50 }) password: string;
}