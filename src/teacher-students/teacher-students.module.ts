import { Module } from '@nestjs/common';
import { TeacherStudentsService } from './teacher-students.service';
import { TeacherStudentsController } from './teacher-students.controller';

@Module({
  controllers: [TeacherStudentsController],
  providers: [TeacherStudentsService],
})
export class TeacherStudentsModule {}
