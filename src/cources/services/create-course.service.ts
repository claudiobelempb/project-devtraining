import { Injectable } from '@nestjs/common'
import { CourseDTO } from '../dto/course.dto'
import { CreateCourseDTO } from '../dto/create-course.dto'

@Injectable()
export class CourseCreateService {
  private courses: CourseDTO[] = []

  constructor() {}
  async execute(request: CourseDTO): Promise<CourseDTO> {
    this.courses.push(request)
    return request
  }
}
