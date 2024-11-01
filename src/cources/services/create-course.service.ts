import { Injectable } from '@nestjs/common'
import { CourseType } from '../response/course.response'

@Injectable()
export class CourseCreateService {
  private courses: CourseType.CourseResponse[] = []

  constructor() {}
  async execute(
    request: CourseType.CourseResponse,
  ): Promise<CourseType.CourseResponse> {
    this.courses.push(request)
    return request
  }
}
