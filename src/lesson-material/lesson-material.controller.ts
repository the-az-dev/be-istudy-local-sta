import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LessonMaterialService } from './lesson-material.service';
import { CreateLessonMaterialDto } from './dto/create-lesson-material.dto';
import { UpdateLessonMaterialDto } from './dto/update-lesson-material.dto';

@Controller('lesson-material')
export class LessonMaterialController {
  constructor(private readonly lessonMaterialService: LessonMaterialService) {}

  @Post()
  create(@Body() createLessonMaterialDto: CreateLessonMaterialDto) {
    return this.lessonMaterialService.create(createLessonMaterialDto);
  }

  @Get()
  findAll() {
    return this.lessonMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonMaterialService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLessonMaterialDto: UpdateLessonMaterialDto,
  ) {
    return this.lessonMaterialService.update(+id, updateLessonMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonMaterialService.remove(+id);
  }
}
