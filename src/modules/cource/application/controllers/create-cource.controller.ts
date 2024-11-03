import { Body, Controller, Get, Post } from '@nestjs/common'
import { CourseType } from '../responses/course.response'
import { Course } from '../../domain/entities/course.entity'
import { CourseCreateService } from '../usecases/course-create.service'

@Controller('courses')
export class CreateCourseController {
  constructor(private readonly service: CourseCreateService) {}

  @Post()
  async handle(@Body() request: CourseType.CourseResponse): Promise<Course> {
    return await this.service.execute(request)
  }
}
