import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Book} from './book.entity';
import {User} from '../users/user/user.entity';

/**
 * A classe BookService é responsável por toda regra de negócio
 * do model Book
 */


@Injectable()
export class BookService {
    
    constructor(
       @InjectRepository(Book)
       @InjectRepository(User)
       private bookRepository: Repository<Book>,
    //    private userRepository: Repository<User>
    ){}

    //lista todos os livros cadastrados
    async getAll(): Promise<Book[]>{
        return this.bookRepository.find();
    }

    //cria um novo livro no banco de dados
    async create(title: string, description: string, id: number): Promise<Book>{
        //const user_id = await this.userRepository.findOne({where:{ id}})
        
        //verifica se o usuário é cadastrado no banco de dados
        // if(!user_id){
        //     throw Error('Este id não existe');
        // }
        const books = await this.bookRepository.create({
            title, description, user_id: id
        })
        return await this.bookRepository.save(books);
    }

    //altera informações dos livros
    async update(book: Book): Promise<UpdateResult>{
        return this.bookRepository.update(book.id, book);
    }
    
    //deleta um livro cadastrado
    async delete(id: number): Promise<DeleteResult>{
        return this.bookRepository.delete(id);
    }
}
