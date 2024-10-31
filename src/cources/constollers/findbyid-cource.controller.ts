import { Controller, Get, Param } from '@nestjs/common'
import { CourseFindByIdService } from '../services/findbyid-course.service'
import { CourseDTO } from '../dto/course.dto'

@Controller('courses')
export class FindByIdCourseController {
  constructor(private readonly service: CourseFindByIdService) {}

  @Get(':id')
  handle(@Param('id') id: number): Promise<CourseDTO> {
    return this.service.execute(id)
  }
}
