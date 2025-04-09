import { Module } from '@nestjs/common';
import { SubscriptionHistoryService } from './subscription-history.service';
import { SubscriptionHistoryController } from './subscription-history.controller';

@Module({
  controllers: [SubscriptionHistoryController],
  providers: [SubscriptionHistoryService],
})
export class SubscriptionHistoryModule {}
