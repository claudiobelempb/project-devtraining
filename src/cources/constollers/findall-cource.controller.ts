import { Controller, Get } from '@nestjs/common'
import { CourseFindAllService } from '../services/findall-course.service'
import { CourseDTO } from '../dto/course.dto'

@Controller('courses')
export class FindAllCourseController {
  constructor(private readonly service: CourseFindAllService) {}

  @Get()
  handle(): Promise<CourseDTO[]> {
    return this.service.execute()
  }
}
