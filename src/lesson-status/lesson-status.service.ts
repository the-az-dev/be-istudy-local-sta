import { Injectable } from '@nestjs/common';
import { CreateLessonStatusDto } from './dto/create-lesson-status.dto';
import { UpdateLessonStatusDto } from './dto/update-lesson-status.dto';

@Injectable()
export class LessonStatusService {
  create(createLessonStatusDto: CreateLessonStatusDto) {
    return 'This action adds a new lessonStatus';
  }

  findAll() {
    return `This action returns all lessonStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lessonStatus`;
  }

  update(id: number, updateLessonStatusDto: UpdateLessonStatusDto) {
    return `This action updates a #${id} lessonStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} lessonStatus`;
  }
}
