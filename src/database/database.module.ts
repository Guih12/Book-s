import {Module,} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from '../users/user/user.entity';
import {Book} from '../book/book.entity';
@Module({
    imports:[TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'docker',
        database: 'books',
        entities: [User, Book],
        synchronize: true,
        logging: true,
    })]
})

export class DatabaseModule{}