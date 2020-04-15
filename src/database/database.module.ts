import {Module,} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
@Module({
    imports:[TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'docker',
        database: 'books',
        synchronize: true,
        logging: true,
    })]
})

export class DatabaseModule{}