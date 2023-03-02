import { Injectable, InternalServerErrorException, NotFoundException,Logger, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourses } from './dto/create-courses.dto';
import { UpdateCourses } from './dto/update-courses.dto';
import { Courses } from './entities/courses.entity';
import { DeleteResultModel } from '../../models/delete-result.model';


@Injectable()
export class CoursesService {
  private readonly logger = new Logger(CoursesService.name);

  @InjectRepository(Courses)
  private readonly repository: Repository<Courses>;

  async create(payload: Partial<Courses>): Promise<Courses> {
    try {
      return await this.repository.save(payload);
    } catch (error) {
      this.logger.error('Error while creating course', error.stack);

      throw new BadRequestException('Error while creating course');
    }
  }

  async findAll(): Promise<Courses[]> {
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

  async findOneOrFail(id: string): Promise<Courses> {
    try {
      return await this.repository.findOneByOrFail({
        id,
      });
    } catch (error) {
      this.logger.error('User not found', error.stack);

      throw new NotFoundException('User not found');
    }
  }

  update(id: number, UpdateCourses: UpdateCourses) {
    return `This action updates a #${id} userInfo`;
  }

  async delete(id: string): Promise<DeleteResultModel> {
    const user = await this.findOneOrFail(id);

    const deleteResult = await this.repository.softDelete(user.id);

    return new DeleteResultModel(id, deleteResult);
  }
}
