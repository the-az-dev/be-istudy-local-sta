import { Module } from '@nestjs/common';
import { HometaskStatusService } from './hometask-status.service';
import { HometaskStatusController } from './hometask-status.controller';

@Module({
  controllers: [HometaskStatusController],
  providers: [HometaskStatusService],
})
export class HometaskStatusModule {}
