import { Injectable } from '@nestjs/common';
import { CreateHometaskStatusDto } from './dto/create-hometask-status.dto';
import { UpdateHometaskStatusDto } from './dto/update-hometask-status.dto';

@Injectable()
export class HometaskStatusService {
  create(createHometaskStatusDto: CreateHometaskStatusDto) {
    return 'This action adds a new hometaskStatus';
  }

  findAll() {
    return `This action returns all hometaskStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hometaskStatus`;
  }

  update(id: number, updateHometaskStatusDto: UpdateHometaskStatusDto) {
    return `This action updates a #${id} hometaskStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} hometaskStatus`;
  }
}
