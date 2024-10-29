import { Controller, Get } from '@nestjs/common'
import { CourseFindAllService } from '../services/findall-course.service'
import { Course } from '../entities/course.entity'

@Controller('courses')
export class FindAllCourseController {
  constructor(private readonly service: CourseFindAllService) {}

  @Get()
  handle(): Promise<Course[]> {
    return this.service.execute()
  }
}
