import { Module } from '@nestjs/common';
import { TeacherSubscriptionService } from './teacher-subscription.service';
import { TeacherSubscriptionController } from './teacher-subscription.controller';

@Module({
  controllers: [TeacherSubscriptionController],
  providers: [TeacherSubscriptionService],
})
export class TeacherSubscriptionModule {}
