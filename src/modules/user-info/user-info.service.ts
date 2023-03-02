import { Injectable, InternalServerErrorException, NotFoundException,Logger, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { UserInfo } from './entities/user-info.entity';
import { DeleteResultModel } from '../../models/delete-result.model';


@Injectable()
export class UserInfoService {
  private readonly logger = new Logger(UserInfoService.name);

  @InjectRepository(UserInfo)
  private readonly repository: Repository<UserInfo>;
  async create(payload: Partial<UserInfo>): Promise<UserInfo> {
    try {
      return await this.repository.save(payload);
    } catch (error) {
      this.logger.error('Error while creating user', error.stack);

      throw new BadRequestException('Error while creating user');
    }
  }

  async findAll(): Promise<UserInfo[]> {
    try {
      return await this.repository.find({
        withDeleted: true,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Unexpected error while fetching all users',
      );
    }
  }

  async findOneOrFail(id: string): Promise<UserInfo> {
    try {
      return await this.repository.findOneByOrFail({
        id,
      });
    } catch (error) {
      this.logger.error('User not found', error.stack);

      throw new NotFoundException('User not found');
    }
  }

  update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return `This action updates a #${id} userInfo`;
  }

  async delete(id: string): Promise<DeleteResultModel> {
    const user = await this.findOneOrFail(id);

    const deleteResult = await this.repository.softDelete(user.id);

    return new DeleteResultModel(id, deleteResult);
  }
}
