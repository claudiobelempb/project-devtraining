import { Course } from 'src/modules/cource/domain/entities/course.entity'
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { randomUUID } from 'node:crypto'

@Entity('tag')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string = randomUUID()

  @Column()
  name: string

  @Column({ name: 'is_active', default: true })
  isActive?: boolean

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date

  @ManyToMany(() => Course, course => course.tags)
  courses: Course[]

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return
    }
    this.id = randomUUID()
  }
}
