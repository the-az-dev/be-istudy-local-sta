import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HometaskService } from './hometask.service';
import { CreateHometaskDto } from './dto/create-hometask.dto';
import { UpdateHometaskDto } from './dto/update-hometask.dto';

@Controller('hometask')
export class HometaskController {
  constructor(private readonly hometaskService: HometaskService) {}

  @Post()
  create(@Body() createHometaskDto: CreateHometaskDto) {
    return this.hometaskService.create(createHometaskDto);
  }

  @Get()
  findAll() {
    return this.hometaskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hometaskService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHometaskDto: UpdateHometaskDto,
  ) {
    return this.hometaskService.update(+id, updateHometaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hometaskService.remove(+id);
  }
}
