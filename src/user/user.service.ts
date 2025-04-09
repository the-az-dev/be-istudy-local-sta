import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUserById(id: number): Promise<User | null> {
    return await this.userRepository.findOneByOrFail({
      userId: id,
    });
  }

  async create(createUserDto: CreateUserDto) {
    // @ts-ignore
    const newUser = this.userRepository.create({ ...createUserDto });
    return await this.userRepository.save(newUser);
  }

  async getUserByToken(token: string) {
    return await this.userRepository.findOneByOrFail({
      token: token,
    });
  }

  async getUserByMail(mail: string) {
    return await this.userRepository.findOneByOrFail({
      mail: mail,
    });
  }

  async updateUser(user: User, mail: string) {
    await this.userRepository.update({ mail: mail }, user);
  }

  async addUser(userDTO: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...userDTO,
    });
    return await this.userRepository.save(newUser);
  }
}
