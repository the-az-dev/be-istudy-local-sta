import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { TeacherSubject } from '../../teacher-subject/entities/teacher-subject.entity';

@Entity({ name: 'teacher' })
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.userId, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  userId: number;
  @Column({ type: 'number', default: 100 })
  defaultPrice: number;
  @ManyToOne(() => TeacherSubject, (subject) => subject.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'subjectId' })
  subject: number;
  @Column({ type: 'text', nullable: true })
  description: string;
  @Column({ type: 'boolean', default: false })
  showInTP: boolean; // TP = tutor place. Students search tutors by that section
}
