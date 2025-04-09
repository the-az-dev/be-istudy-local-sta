import { Injectable } from '@nestjs/common';
import { CreateTeacherSubscriptionDto } from './dto/create-teacher-subscription.dto';
import { UpdateTeacherSubscriptionDto } from './dto/update-teacher-subscription.dto';

@Injectable()
export class TeacherSubscriptionService {
  create(createTeacherSubscriptionDto: CreateTeacherSubscriptionDto) {
    return 'This action adds a new teacherSubscription';
  }

  findAll() {
    return `This action returns all teacherSubscription`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacherSubscription`;
  }

  update(
    id: number,
    updateTeacherSubscriptionDto: UpdateTeacherSubscriptionDto,
  ) {
    return `This action updates a #${id} teacherSubscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacherSubscription`;
  }
}
