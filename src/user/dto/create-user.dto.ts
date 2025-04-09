import { Role } from '../../user-role/constants/user-role.enum';

export class CreateUserDto {
  name: string;
  surname: string;
  mail: string;
  login: string;
  password: string;
  isVerified: boolean = false;
  phoneNumber: string;
  userRole: Role[];
}
