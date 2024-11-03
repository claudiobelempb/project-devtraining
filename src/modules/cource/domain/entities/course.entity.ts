import { randomUUID } from 'node:crypto'
import { Tag } from 'src/modules/tag/domain/entities/tag.entity'
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('course')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string = randomUUID()

  @Column()
  name: string

  @Column()
  description: string

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

  @JoinTable()
  @ManyToMany(() => Tag, tag => tag.courses, {
    cascade: true,
  })
  tags: Tag[]

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return
    }
    this.id = randomUUID()
  }
}
