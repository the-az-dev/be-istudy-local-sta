import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUserById(id: number): Promise<User | null> {
    const user: User = await this.userRepository.findOneByOrFail({
      userId: id,
    });
    return user;
  }

  async create(createUserDto: CreateUserDto){
    const newUser = await this.userRepository.create(
      {...createUserDto}
    );
    return await this.userRepository.save(newUser);
  }
}
