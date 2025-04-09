import { Injectable } from '@nestjs/common';
import { CreateLessonMeetingDto } from './dto/create-lesson-meeting.dto';
import { UpdateLessonMeetingDto } from './dto/update-lesson-meeting.dto';

@Injectable()
export class LessonMeetingService {
  create(createLessonMeetingDto: CreateLessonMeetingDto) {
    return 'This action adds a new lessonMeeting';
  }

  findAll() {
    return `This action returns all lessonMeeting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lessonMeeting`;
  }

  update(id: number, updateLessonMeetingDto: UpdateLessonMeetingDto) {
    return `This action updates a #${id} lessonMeeting`;
  }

  remove(id: number) {
    return `This action removes a #${id} lessonMeeting`;
  }
}
