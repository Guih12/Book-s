import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import {UserService} from './user.service'; 
import {User} from './user.entity';
import {Request, Response} from 'express';

/**
 * a classe UserController é reponsável por fzer as requições de usuários
 * mas não lida com as regras de negóciom, logo extende o UserService 
 * que faz toda as regras necessárias para usuários
 */


@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    //lista os usuários criados
    @Get()
    async index(): Promise<User[]>{
        return await this.userService.findAll();
    }
    //cria novos usuários
    @Post('create')
    async store(@Body() user: User): Promise<User>{
        return await this.userService.create(user);
    }

    //altera dados de usuários
    @Put('id:/update')
    async update(@Param('id') id: number, @Body() user: User): Promise<any>{
        user.id= id
        return await this.userService.update(user);
    }

    //deleta usuários
    @Delete('id:/delte')
    async delete(@Param('id') id: number): Promise<any>{
        return this.userService.delete(id);
    }
}
