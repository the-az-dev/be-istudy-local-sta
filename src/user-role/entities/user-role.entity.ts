import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'userRole' })
export class UserRole {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 150 })
  name: string;
}
