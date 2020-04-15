import {Module} from '@nestjs/common';
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
        entities: [
            "src/entity/**/*.ts"
        ],
        migrations: [
            "src/migration/**/*.ts"
        ],
        subscribers: [
            "src/subscriber/**/*.ts"
        ]
    })]
})

export class DatabaseModule{}