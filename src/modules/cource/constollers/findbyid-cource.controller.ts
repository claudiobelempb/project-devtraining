import { Controller, Get, Param } from '@nestjs/common'
import { CourseFindByIdService } from '../application/usecases/course-findbyid.service'
import { CourseType } from '../application/responses/course.response'

@Controller('courses')
export class FindByIdCourseController {
  constructor(private readonly service: CourseFindByIdService) {}

  @Get(':id')
  handle(@Param('id') id: string): Promise<CourseType.CourseResponse> {
    return this.service.execute(id)
  }
}
