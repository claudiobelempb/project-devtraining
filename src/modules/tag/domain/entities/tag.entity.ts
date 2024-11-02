import { Course } from 'src/modules/cource/domain/entities/course.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('tag')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ default: true })
  active?: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt?: Date

  @ManyToMany(() => Course, course => course.tags)
  courses: Course[]
}
