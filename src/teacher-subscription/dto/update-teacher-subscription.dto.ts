import { PartialType } from '@nestjs/swagger';
import { CreateTeacherSubscriptionDto } from './create-teacher-subscription.dto';

export class UpdateTeacherSubscriptionDto extends PartialType(
  CreateTeacherSubscriptionDto,
) {}
