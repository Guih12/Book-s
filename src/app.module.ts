import { Module } from '@nestjs/common';
import {UserModule} from './users/user/user.module';
import {DatabaseModule} from './database/database.module';
import { BookModule } from './book/book.module';


@Module({
  imports: [DatabaseModule, UserModule, BookModule],
})
export class AppModule {}
