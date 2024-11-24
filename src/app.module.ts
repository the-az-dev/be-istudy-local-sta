import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { LessonModule } from './lesson/lesson.module';
import { PaymentHistoryModule } from './payment-history/payment-history.module';

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
      entities: [User],
      synchronize: false,
    }),
    TeacherModule,
    StudentModule,
    LessonModule,
    PaymentHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
