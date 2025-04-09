import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from './user-role/entities/user-role.entity';
import { Repository } from 'typeorm';
import { Role } from './user-role/constants/user-role.enum';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(UserRole)
    private userRoleRepository: Repository<UserRole>,
  ) {}

  async seedUserRoles() {
    const roles = [
      { id: Role.Admin, name: 'Admin' },
      { id: Role.Teacher, name: 'Teacher' },
      { id: Role.Student, name: 'Student' },
      { id: Role.Guest, name: 'Guest' },
    ];

    for (const role of roles) {
      const exists = await this.userRoleRepository.findOneBy({ id: role.id });
      if (!exists) {
        await this.userRoleRepository.save(role);
      }
    }
  }
}
