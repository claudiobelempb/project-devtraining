import { Tag } from 'src/modules/tag/domain/entities/tag.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('course')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column({ default: true })
  active?: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt?: Date

  @JoinTable()
  @ManyToMany(() => Tag, tag => tag.courses)
  tags: Tag[]
}
