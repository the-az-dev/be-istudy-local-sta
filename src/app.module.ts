import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService, SeederService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { LessonModule } from './lesson/lesson.module';
import { PaymentHistoryModule } from './payment-history/payment-history.module';
import { UserRoleModule } from './user-role/user-role.module';
import { AuthModule } from './auth/auth.module';
import { UserRole } from './user-role/entities/user-role.entity';
import { MaillerModule } from './mailer/mailler.module';
import { TeacherStudentsModule } from './teacher-students/teacher-students.module';
import { LessonMeetingModule } from './lesson-meeting/lesson-meeting.module';
import { LessonMaterialModule } from './lesson-material/lesson-material.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { TeacherSubscriptionModule } from './teacher-subscription/teacher-subscription.module';
import { HometaskModule } from './hometask/hometask.module';
import { HometaskMaterialModule } from './hometask-material/hometask-material.module';
import { HometaskStatusModule } from './hometask-status/hometask-status.module';
import { LessonStatusModule } from './lesson-status/lesson-status.module';
import { PaymentStatusModule } from './payment-status/payment-status.module';
import { SubscriptionHistoryModule } from './subscription-history/subscription-history.module';
import { SubscriptionTypeModule } from './subscription-type/subscription-type.module';

dotenv.config({ path: __dirname + '/../.env' });

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [User, UserRole],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([UserRole, User]),
    LessonModule,
    PaymentHistoryModule,
    UserRoleModule,
    AuthModule,
    MaillerModule,
    TeacherStudentsModule,
    LessonMeetingModule,
    LessonMaterialModule,
    TeacherModule,
    StudentModule,
    TeacherSubscriptionModule,
    HometaskModule,
    HometaskMaterialModule,
    HometaskStatusModule,
    LessonStatusModule,
    PaymentStatusModule,
    SubscriptionHistoryModule,
    SubscriptionTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService, SeederService],
  exports: [SeederService],
})
export class AppModule {}
