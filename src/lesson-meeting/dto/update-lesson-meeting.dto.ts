import { PartialType } from '@nestjs/swagger';
import { CreateLessonMeetingDto } from './create-lesson-meeting.dto';

export class UpdateLessonMeetingDto extends PartialType(
  CreateLessonMeetingDto,
) {}
