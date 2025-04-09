import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { MaillerModule } from '../mailer/mailler.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../../.env' });

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.AUTH_JWT_SECRET,
      global: true,
      signOptions: {
        expiresIn: '15m',
      },
    }),
    MaillerModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
