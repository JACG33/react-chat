import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersModel } from 'src/models/users.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(@InjectModel(UsersModel) private userModel: typeof UsersModel) {}

  async create(createUserDto: CreateUserDto) {
    await this.userModel.sync();
    try {
      const query = await this.userModel.create({
        username: createUserDto.username,
        password: createUserDto.password,
      });

      return query;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    await this.userModel.sync();
    try {
      const query = await this.userModel.findAll();
      return query;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    await this.userModel.sync();
    try {
      const query = await this.userModel.findOne({ where: { id } });
      return query;
    } catch (error) {
      return error;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
