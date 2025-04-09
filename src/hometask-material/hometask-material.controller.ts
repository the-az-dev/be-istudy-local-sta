import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HometaskMaterialService } from './hometask-material.service';
import { CreateHometaskMaterialDto } from './dto/create-hometask-material.dto';
import { UpdateHometaskMaterialDto } from './dto/update-hometask-material.dto';

@Controller('hometask-material')
export class HometaskMaterialController {
  constructor(
    private readonly hometaskMaterialService: HometaskMaterialService,
  ) {}

  @Post()
  create(@Body() createHometaskMaterialDto: CreateHometaskMaterialDto) {
    return this.hometaskMaterialService.create(createHometaskMaterialDto);
  }

  @Get()
  findAll() {
    return this.hometaskMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hometaskMaterialService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHometaskMaterialDto: UpdateHometaskMaterialDto,
  ) {
    return this.hometaskMaterialService.update(+id, updateHometaskMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hometaskMaterialService.remove(+id);
  }
}
