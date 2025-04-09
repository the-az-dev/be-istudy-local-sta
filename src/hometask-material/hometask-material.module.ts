import { Module } from '@nestjs/common';
import { HometaskMaterialService } from './hometask-material.service';
import { HometaskMaterialController } from './hometask-material.controller';

@Module({
  controllers: [HometaskMaterialController],
  providers: [HometaskMaterialService],
})
export class HometaskMaterialModule {}
