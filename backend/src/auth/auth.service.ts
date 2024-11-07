import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UsersModel } from 'src/models/users.model';

@Injectable()
export class AuthService {
  constructor(@InjectModel(UsersModel) private userModel: typeof UsersModel) {}

  async create(createAuthDto: CreateAuthDto) {
    await this.userModel.sync();
    try {
      const query = await this.userModel.create({
        username: createAuthDto.username,
        password: createAuthDto.password,
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

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
