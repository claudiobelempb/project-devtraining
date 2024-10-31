import { Body, Controller, Get, Post } from '@nestjs/common'
import { CourseCreateService } from '../services/create-course.service'
import { CourseDTO } from '../dto/course.dto'

@Controller('courses')
export class CreateCourseController {
  constructor(private readonly service: CourseCreateService) {}

  @Post()
  async handle(@Body() request: CourseDTO): Promise<CourseDTO> {
    return await this.service.execute(request)
  }
}
