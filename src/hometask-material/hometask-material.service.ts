import { Injectable } from '@nestjs/common';
import { CreateHometaskMaterialDto } from './dto/create-hometask-material.dto';
import { UpdateHometaskMaterialDto } from './dto/update-hometask-material.dto';

@Injectable()
export class HometaskMaterialService {
  create(createHometaskMaterialDto: CreateHometaskMaterialDto) {
    return 'This action adds a new hometaskMaterial';
  }

  findAll() {
    return `This action returns all hometaskMaterial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hometaskMaterial`;
  }

  update(id: number, updateHometaskMaterialDto: UpdateHometaskMaterialDto) {
    return `This action updates a #${id} hometaskMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} hometaskMaterial`;
  }
}
