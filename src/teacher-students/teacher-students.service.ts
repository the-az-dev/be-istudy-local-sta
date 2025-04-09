import { Injectable } from '@nestjs/common';
import { CreateTeacherStudentDto } from './dto/create-teacher-student.dto';
import { UpdateTeacherStudentDto } from './dto/update-teacher-student.dto';

@Injectable()
export class TeacherStudentsService {
  create(createTeacherStudentDto: CreateTeacherStudentDto) {
    return 'This action adds a new teacherStudent';
  }

  findAll() {
    return `This action returns all teacherStudents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacherStudent`;
  }

  update(id: number, updateTeacherStudentDto: UpdateTeacherStudentDto) {
    return `This action updates a #${id} teacherStudent`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacherStudent`;
  }
}
