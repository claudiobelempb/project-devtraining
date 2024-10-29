import { Body, Controller, Param, Put } from '@nestjs/common'
import { CourseUpdateService } from '../services/update-course.service'
import { Course } from '../entities/course.entity'

@Controller('courses')
export class UpdateCourseController {
  constructor(private readonly service: CourseUpdateService) {}

  @Put(':id')
  handle(@Param('id') id: number, @Body() request: Course): Promise<Course[]> {
    return this.service.execute(+id, request)
  }
}
