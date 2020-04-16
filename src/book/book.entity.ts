import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import {User} from '../users/user/user.entity';

@Entity('books')
export class Book{

    @PrimaryGeneratedColumn() id: number;

    @Column({type: 'varchar', length: 255, nullable: false}) title: string;

    @Column({type: 'varchar', length: 255, nullable: false}) description: string;

    @Column({type: 'integer', nullable: false}) user_id: number;

    @CreateDateColumn({type: 'timestamptz', nullable: true}) created_at: Date;

    @UpdateDateColumn({type: 'timestamptz', nullable: true}) updated_at: Date;

    @ManyToOne(type=> User, user=> user.books)

    @JoinColumn({
        name: "user_id", referencedColumnName: "id"
    })
    user: Promise<User>
}