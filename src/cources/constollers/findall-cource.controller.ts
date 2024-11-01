import { Controller, Get } from '@nestjs/common'
import { CourseFindAllService } from '../services/findall-course.service'
import { CourseType } from '../response/course.response'

@Controller('courses')
export class FindAllCourseController {
  constructor(private readonly service: CourseFindAllService) {}

  @Get()
  handle(): Promise<CourseType.CourseResponse[]> {
    return this.service.execute()
  }
}
