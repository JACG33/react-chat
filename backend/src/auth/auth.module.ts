import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModel } from 'src/models/users.model';

@Module({
  imports:[SequelizeModule.forFeature([UsersModel])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
