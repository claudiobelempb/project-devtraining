import { Injectable } from '@nestjs/common'
import { Course } from '../entities/course.entity'

@Injectable()
export class CourseFindByIdService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do Framework NestJS',
      description: 'Curso sobre fundamento do framework NestJS',
      tags: ['node.js', 'nestjs', 'javascript', 'typescript'],
    },
    {
      id: 2,
      name: 'Fundamentos do Framework NestJS',
      description: 'Curso sobre fundamento do framework NestJS',
      tags: ['node.js', 'nestjs', 'javascript', 'typescript'],
    },
  ]
  constructor() {}

  async execute(id: number): Promise<Course> {
    return this.courses.find(couser => couser.id === id)
  }
}
