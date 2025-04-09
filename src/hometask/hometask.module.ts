import { Module } from '@nestjs/common';
import { HometaskService } from './hometask.service';
import { HometaskController } from './hometask.controller';

@Module({
  controllers: [HometaskController],
  providers: [HometaskService],
})
export class HometaskModule {}
