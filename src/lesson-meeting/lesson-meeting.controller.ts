import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LessonMeetingService } from './lesson-meeting.service';
import { CreateLessonMeetingDto } from './dto/create-lesson-meeting.dto';
import { UpdateLessonMeetingDto } from './dto/update-lesson-meeting.dto';

@Controller('lesson-meeting')
export class LessonMeetingController {
  constructor(private readonly lessonMeetingService: LessonMeetingService) {}

  @Post()
  create(@Body() createLessonMeetingDto: CreateLessonMeetingDto) {
    return this.lessonMeetingService.create(createLessonMeetingDto);
  }

  @Get()
  findAll() {
    return this.lessonMeetingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonMeetingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLessonMeetingDto: UpdateLessonMeetingDto,
  ) {
    return this.lessonMeetingService.update(+id, updateLessonMeetingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonMeetingService.remove(+id);
  }
}
