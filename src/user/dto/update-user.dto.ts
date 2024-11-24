import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    photo: Buffer;
    phoneNumber: string;
    telegramId: string;
    token: string;
    signedAt: Date;
}
