import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HometaskStatusService } from './hometask-status.service';
import { CreateHometaskStatusDto } from './dto/create-hometask-status.dto';
import { UpdateHometaskStatusDto } from './dto/update-hometask-status.dto';

@Controller('hometask-status')
export class HometaskStatusController {
  constructor(private readonly hometaskStatusService: HometaskStatusService) {}

  @Post()
  create(@Body() createHometaskStatusDto: CreateHometaskStatusDto) {
    return this.hometaskStatusService.create(createHometaskStatusDto);
  }

  @Get()
  findAll() {
    return this.hometaskStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hometaskStatusService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHometaskStatusDto: UpdateHometaskStatusDto,
  ) {
    return this.hometaskStatusService.update(+id, updateHometaskStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hometaskStatusService.remove(+id);
  }
}
