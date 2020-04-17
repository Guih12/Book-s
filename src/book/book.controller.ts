import { Controller, Post, Get, Delete, Body, Param, Put } from '@nestjs/common';
import {BookService} from './book.service';
import {Book} from './book.entity';
import {Request, Response} from 'express';


@Controller('book')
export class BookController {
    constructor(
        private bookService: BookService
    ){}
    
    //lista todos os livros
    @Get()
    async index(req: Request, res: Response): Promise<Book[]>{
       
        return  await this.bookService.getAll();
    }

    //cria novos cadastrado de livros
    @Post(':id/create')
    async store(
        @Body('title') title: string, 
        @Body('description') description: string,
        @Param('id') id: number,
        
        ): Promise<Book>{

        return  await this.bookService.create(title, description, id)
    }

    //altera informação de livro
    @Put(':id/update')
    async update(@Param('id') id: number, @Body() book: Book): Promise<any>{
        book.id = id
        return await this.bookService.update(book)
    }

    //deleta livos do banco de dados
    @Delete(':id/delete')
    async delete(@Param('id') id:number, res: Response): Promise<any>{
        await this.bookService.delete(id);
        return res.status(200).json({message: 'Livro excluido com sucesso'});
    }
}
