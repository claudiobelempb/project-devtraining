import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tb_course')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column('json', { nullable: true })
  tags: string[]
}
