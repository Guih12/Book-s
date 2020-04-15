import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import * as brcrypt from 'bcryptjs';
import {Book} from '../../book/book.entity';

@Entity('users')
export class User{

    @PrimaryGeneratedColumn() id: number;

    @Column({type: 'varchar', length: 255, nullable: false}) username: string;

    @Column({type: 'varchar', length: 255, nullable: false, unique: true}) email: string;

    @Column({type: 'varchar', length: 255, nullable: false}) password: string;

    @CreateDateColumn({type: 'timestamptz', nullable: true}) created_at: Date;
    
    @UpdateDateColumn({type: 'timestamptz', nullable: true}) updated_at: Date;

    public hashPassword(){
        this.password = brcrypt.hashSync(this.password, 8);
    }
    public comparyPassowrd(passwordHash: string){
        return brcrypt.compare(passwordHash, this.password);
    }

    @OneToMany(type=> Book, book => book.user)
    books: Promise<Book[]>
}
