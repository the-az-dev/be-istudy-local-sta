import { PartialType } from '@nestjs/swagger';
import { CreateLessonStatusDto } from './create-lesson-status.dto';

export class UpdateLessonStatusDto extends PartialType(CreateLessonStatusDto) {}
