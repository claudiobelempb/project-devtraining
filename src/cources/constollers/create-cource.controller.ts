import { Body, Controller, Get, Post } from '@nestjs/common'
import { CourseCreateService } from '../services/create-course.service'
import { CourseType } from '../response/course.response'

@Controller('courses')
export class CreateCourseController {
  constructor(private readonly service: CourseCreateService) {}

  @Post()
  async handle(
    @Body() request: CourseType.CourseResponse,
  ): Promise<CourseType.CourseResponse> {
    return await this.service.execute(request)
  }
}
