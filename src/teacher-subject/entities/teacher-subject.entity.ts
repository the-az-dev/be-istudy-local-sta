import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class TeacherSubject {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 64, name: 'subject' })
  subject: string;
}
