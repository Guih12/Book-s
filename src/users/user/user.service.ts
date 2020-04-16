import { Injectable } from '@nestjs/common';
import {Repository, UpdateResult, DeleteResult} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {User} from './user.entity';

/**
 * A classe Uservice é reponsável por toda regra de negócio de usuários
 * 
 */

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}
    
    //lista todos os usuários 
    async findAll(): Promise<User[]>{
        return this.userRepository.find();
    }


    //cria um novo usuário no banco de dados
    async create(user: User): Promise<User>{
        const users = await this.userRepository.create(user);
        users.hashPassword()
        return await this.userRepository.save(users);
    } 

    //altera dados dos usuários cadastrados
    async update(user: User): Promise<UpdateResult>{
        return this.userRepository.update(user.id, user);
    }

    //deleta usuário do banco de dados
    async delete(id: number): Promise<DeleteResult>{
        return this.userRepository.delete(id);
    }
}
