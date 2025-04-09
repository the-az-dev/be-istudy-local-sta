import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRole } from '../../user-role/entities/user-role.entity';
import { Role } from '../../user-role/constants/user-role.enum';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ name: 'userId' })
  userId: number;
  @Column({ name: 'name', length: 64 })
  name: string;
  @Column({ name: 'surname', length: 64 })
  surname: string;
  @Column({ name: 'photo', nullable: true })
  photo: Buffer;
  @Column({ name: 'phoneNumber', length: 20 })
  phoneNumber: string;
  @Column({ name: 'mail', length: 64 })
  mail: string;
  @Column({ name: 'telegramId', nullable: true })
  telegramId: number;
  @Column({ name: 'login', length: 128 })
  login: string;
  @Column({ name: 'password', length: 270 })
  password: string;
  @Column({ name: 'isVerified' })
  isVerified: boolean;
  @Column({ name: 'token', length: 256, nullable: true })
  token: string;
  @ManyToOne(() => UserRole, (role) => role.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userRole' })
  userRole: Role[];
  @CreateDateColumn({
    type: 'datetime',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP()',
  })
  created_at: Date;
  @CreateDateColumn({
    type: 'datetime',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP()',
  })
  signedAt: Date;
}
