import { Injectable } from '@nestjs/common'
import { Course } from '../entities/course.entity'

@Injectable()
export class CourseCreateService {
  private courses: Course[] = []

  constructor() {}
  async execute(request: Course): Promise<Course[]> {
    this.courses.push(request)
    return this.courses
  }
}
