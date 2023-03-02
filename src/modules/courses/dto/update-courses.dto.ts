import { PartialType } from '@nestjs/mapped-types';
import { CreateCourses } from './create-courses.dto';

export class UpdateCourses extends PartialType(CreateCourses) {}
