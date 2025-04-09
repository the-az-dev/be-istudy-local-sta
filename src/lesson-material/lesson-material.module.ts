import { Module } from '@nestjs/common';
import { LessonMaterialService } from './lesson-material.service';
import { LessonMaterialController } from './lesson-material.controller';

@Module({
  controllers: [LessonMaterialController],
  providers: [LessonMaterialService],
})
export class LessonMaterialModule {}
