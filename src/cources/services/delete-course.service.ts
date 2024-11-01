import { Injectable } from '@nestjs/common'
import { CourseType } from '../response/course.response'
@Injectable()
export class CourseDeleteService {
  private courses: CourseType.CourseResponse[] = [
    {
      id: 1,
      name: 'Fundamentos do Framework NestJS',
      description: 'Curso sobre fundamento do framework NestJS',
      tags: ['node.js', 'nestjs', 'javascript', 'typescript'],
    },
  ]
  constructor() {}
  async execute(id: number): Promise<void> {
    const index = this.courses.findIndex(course => course.id === id)
    if (index >= 0) {
      this.courses.splice(index, 1)
    }
    console.log(index)
  }
}
