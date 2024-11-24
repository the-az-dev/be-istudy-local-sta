import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ name: 'userId' })
  userId: number;
  @Column({ name: 'name', length: 64 })
  name: string;
  @Column({ name: 'surname', length: 64 })
  surname: string;
  @Column({ name: 'photo' })
  photo: Buffer;
  @Column({ name: 'phoneNumber', length: 20 })
  phoneNumber: string;
  @Column({ name: 'mail', length: 64 })
  mail: string;
  @Column({ name: 'telegramId' })
  telegramId: number;
  @Column({ name: 'login', length: 128 })
  login: string;
  @Column({ name: 'password', length: 270 })
  password: string;
  @Column({ name: 'roleId' })
  roleId: number;
  @Column({ name: 'confirmed' })
  confirmed: boolean;
  @Column({ name: 'token', length: 256 })
  token: string;
  @Column({ name: 'createdAt' })
  createdAt: Date;
  @Column({ name: 'signedAt' })
  signedAt: Date;
}
