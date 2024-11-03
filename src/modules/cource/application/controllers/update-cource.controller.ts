import { Body, Controller, Param, Put } from '@nestjs/common'
import { CourseUpdateService } from '../usecases/course-update.service'
import { CourseType } from '../responses/course.response'

@Controller('courses')
export class UpdateCourseController {
  constructor(private readonly service: CourseUpdateService) {}

  @Put(':id')
  handle(
    @Param('id') id: string,
    @Body() request: CourseType.CourseResponse,
  ): Promise<CourseType.CourseResponse> {
    return this.service.execute(id, request)
  }
}
