import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LessonStatusService } from './lesson-status.service';
import { CreateLessonStatusDto } from './dto/create-lesson-status.dto';
import { UpdateLessonStatusDto } from './dto/update-lesson-status.dto';

@Controller('lesson-status')
export class LessonStatusController {
  constructor(private readonly lessonStatusService: LessonStatusService) {}

  @Post()
  create(@Body() createLessonStatusDto: CreateLessonStatusDto) {
    return this.lessonStatusService.create(createLessonStatusDto);
  }

  @Get()
  findAll() {
    return this.lessonStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonStatusService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLessonStatusDto: UpdateLessonStatusDto,
  ) {
    return this.lessonStatusService.update(+id, updateLessonStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonStatusService.remove(+id);
  }
}
