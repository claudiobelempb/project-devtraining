import { Injectable } from '@nestjs/common'
import { Course } from '../entities/course.entity'
import { CourseType } from '../response/course.response'

@Injectable()
export class CourseUpdateService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do Framework NestJS',
      description: 'Curso sobre fundamento do framework NestJS',
      tags: ['node.js', 'nestjs', 'javascript', 'typescript'],
    },
  ]
  constructor() {}
  async execute(
    id: number,
    request: CourseType.CourseResponse,
  ): Promise<CourseType.CourseResponse> {
    const existingCourse = this.courses.find(course => course.id === id)
    if (existingCourse) {
      const index = this.courses.findIndex(course => course.id === id)
      this.courses[index] = {
        id,
        name: request.name,
        description: request.description,
        tags: request.tags,
      }
    }
    return request
  }
}
