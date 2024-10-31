import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Course } from '../entities/course.entity'
import { CourseDTO } from '../dto/course.dto'

@Injectable()
export class CourseFindByIdService {
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

  async execute(id: number): Promise<CourseDTO> {
    const course = this.courses.find(couser => couser.id === id)

    if (!course) {
      throw new HttpException(`Course id ${id} not found`, HttpStatus.NOT_FOUND)
    }

    return course
  }
}
