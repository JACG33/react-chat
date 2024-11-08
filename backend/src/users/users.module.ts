import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModel } from 'src/models/users.model';

@Module({
  imports:[SequelizeModule.forFeature([UsersModel])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
