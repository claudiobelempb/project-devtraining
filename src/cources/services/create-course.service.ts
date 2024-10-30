import { Injectable } from '@nestjs/common'
import { Course } from '../entities/course.entity'
import { CreateCourseDTO } from '../dto/create-course.dto'

@Injectable()
export class CourseCreateService {
  private courses: Course[] = []

  constructor() {}
  async execute(request: CreateCourseDTO): Promise<CreateCourseDTO[]> {
    this.courses.push(request)
    return this.courses
  }
}
