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

import { v4 as uuidv4 } from 'uuid'

@Entity('course')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4()

  @Column()
  name: string

  @Column()
  description: string

  @Column({ type: 'boolean', default: false })
  isActive?: boolean

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
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
    this.id = uuidv4()
  }
}
