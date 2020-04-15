import { Module } from '@nestjs/common';
import {UserModule} from './users/user/user.module';
import {DatabaseModule} from './database/database.module';

@Module({
  imports: [DatabaseModule, UserModule],
})
export class AppModule {}
