import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeacherStudentsService } from './teacher-students.service';
import { CreateTeacherStudentDto } from './dto/create-teacher-student.dto';
import { UpdateTeacherStudentDto } from './dto/update-teacher-student.dto';

@Controller('teacher-students')
export class TeacherStudentsController {
  constructor(
    private readonly teacherStudentsService: TeacherStudentsService,
  ) {}

  @Post()
  create(@Body() createTeacherStudentDto: CreateTeacherStudentDto) {
    return this.teacherStudentsService.create(createTeacherStudentDto);
  }

  @Get()
  findAll() {
    return this.teacherStudentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherStudentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeacherStudentDto: UpdateTeacherStudentDto,
  ) {
    return this.teacherStudentsService.update(+id, updateTeacherStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherStudentsService.remove(+id);
  }
}
