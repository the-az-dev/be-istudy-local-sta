import { Module } from '@nestjs/common';
import { LessonStatusService } from './lesson-status.service';
import { LessonStatusController } from './lesson-status.controller';

@Module({
  controllers: [LessonStatusController],
  providers: [LessonStatusService],
})
export class LessonStatusModule {}
