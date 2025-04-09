import { Module } from '@nestjs/common';
import { LessonMeetingService } from './lesson-meeting.service';
import { LessonMeetingController } from './lesson-meeting.controller';

@Module({
  controllers: [LessonMeetingController],
  providers: [LessonMeetingService],
})
export class LessonMeetingModule {}
