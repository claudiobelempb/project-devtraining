import { Body, Controller, Param, Put } from '@nestjs/common'
import { CourseUpdateService } from '../services/update-course.service'
import { CourseType } from '../response/course.response'

@Controller('courses')
export class UpdateCourseController {
  constructor(private readonly service: CourseUpdateService) {}

  @Put(':id')
  handle(
    @Param('id') id: number,
    @Body() request: CourseType.CourseResponse,
  ): Promise<CourseType.CourseResponse> {
    return this.service.execute(id, request)
  }
}
