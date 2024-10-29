import { Controller, Get, Param } from '@nestjs/common'
import { CourseFindByIdService } from '../services/findbyid-course.service'
import { Course } from '../entities/course.entity'

@Controller('courses')
export class FindByIdCourseController {
  constructor(private readonly service: CourseFindByIdService) {}

  @Get(':id')
  handle(@Param('id') id: number): Promise<Course> {
    return this.service.execute(+id)
  }
}
