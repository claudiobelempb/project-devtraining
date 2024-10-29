import { Injectable } from '@nestjs/common'
import { Course } from '../entities/course.entity'

@Injectable()
export class CourseFindAllService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do Framework NestJS',
      description: 'Curso sobre fundamento do framework NestJS',
      tags: ['node.js', 'nestjs', 'javascript', 'typescript'],
    },
  ]
  constructor() {}
  async execute(): Promise<Course[]> {
    return this.courses
  }
}
