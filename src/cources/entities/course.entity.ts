import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tb_course')
export class Course {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string

  @Column()
  description: string

  @Column('json', { nullable: true })
  tags: string[]
}
