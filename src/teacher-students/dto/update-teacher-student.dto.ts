import { PartialType } from '@nestjs/swagger';
import { CreateTeacherStudentDto } from './create-teacher-student.dto';

export class UpdateTeacherStudentDto extends PartialType(
  CreateTeacherStudentDto,
) {}
