import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import {BookController} from './book.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Book} from './book.entity';
import {User} from '../users/user/user.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Book])],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
