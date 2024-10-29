import { Body, Controller, Get, Post } from '@nestjs/common'
import { CourseCreateService } from '../services/create-course.service'
import { Course } from '../entities/course.entity'

@Controller('courses')
export class CreateCourseController {
  constructor(private readonly service: CourseCreateService) {}

  @Post()
  async handle(@Body() request: Course): Promise<Course[]> {
    return await this.service.execute(request)
  }
}
