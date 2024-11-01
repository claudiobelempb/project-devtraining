import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Course } from '../entities/course.entity'
import { CourseType } from '../response/course.response'

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

  async execute(id: number): Promise<CourseType.CourseResponse> {
    const course = this.courses.find(couser => couser.id === id)

    if (!course) {
      throw new HttpException(`Course id ${id} not found`, HttpStatus.NOT_FOUND)
    }

    return course
  }
}
