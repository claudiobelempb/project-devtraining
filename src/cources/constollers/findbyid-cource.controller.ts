import { Controller, Get, Param } from '@nestjs/common'
import { CourseFindByIdService } from '../services/findbyid-course.service'
import { CourseType } from '../response/course.response'

@Controller('courses')
export class FindByIdCourseController {
  constructor(private readonly service: CourseFindByIdService) {}

  @Get(':id')
  handle(@Param('id') id: number): Promise<CourseType.CourseResponse> {
    return this.service.execute(id)
  }
}
