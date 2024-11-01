import { Injectable } from '@nestjs/common'
import { CourseType } from '../response/course.response'
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
    {
      id: 2,
      name: 'Fundamentos do Framework NestJS',
      description: 'Curso sobre fundamento do framework NestJS',
      tags: ['node.js', 'nestjs', 'javascript', 'typescript'],
    },
  ]
  constructor() {}
  async execute(): Promise<CourseType.CourseResponse[]> {
    return this.courses
  }
}
