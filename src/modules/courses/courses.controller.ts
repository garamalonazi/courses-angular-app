import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourses } from './dto/create-courses.dto';
import { UpdateCourses } from './dto/update-courses.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly Courses: CoursesService) {}

  @Post()
  create(@Body() createUserInfoDto: CreateCourses) {
    return this.Courses.create(createUserInfoDto);
  }

  @Get()
  findAll() {
    return this.Courses.findAll();
  }

  @Get(':id')
  findOneOrFail(@Param('id') id: string) {
    return this.Courses.findOneOrFail(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCourses: UpdateCourses) {
    return this.Courses.update(+id, UpdateCourses);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.Courses.delete(id);
  }
}
