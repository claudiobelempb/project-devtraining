import { Injectable } from '@nestjs/common'
import { Course } from '../entities/course.entity'
import { CourseDTO } from '../dto/course.dto'

@Injectable()
export class CourseFindAllService {
  private courses: CourseDTO[] = [
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
  async execute(): Promise<CourseDTO[]> {
    return this.courses
  }
}
