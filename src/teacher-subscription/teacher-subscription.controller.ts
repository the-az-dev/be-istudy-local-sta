import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeacherSubscriptionService } from './teacher-subscription.service';
import { CreateTeacherSubscriptionDto } from './dto/create-teacher-subscription.dto';
import { UpdateTeacherSubscriptionDto } from './dto/update-teacher-subscription.dto';

@Controller('teacher-subscription')
export class TeacherSubscriptionController {
  constructor(
    private readonly teacherSubscriptionService: TeacherSubscriptionService,
  ) {}

  @Post()
  create(@Body() createTeacherSubscriptionDto: CreateTeacherSubscriptionDto) {
    return this.teacherSubscriptionService.create(createTeacherSubscriptionDto);
  }

  @Get()
  findAll() {
    return this.teacherSubscriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherSubscriptionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeacherSubscriptionDto: UpdateTeacherSubscriptionDto,
  ) {
    return this.teacherSubscriptionService.update(
      +id,
      updateTeacherSubscriptionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherSubscriptionService.remove(+id);
  }
}
