import { Controller, Get } from '@nestjs/common'
import { CourseFindAllService } from '../usecases/course-findall.service'
import { CourseType } from '../responses/course.response'

@Controller('courses')
export class FindAllCourseController {
  constructor(private readonly service: CourseFindAllService) {}

  @Get()
  handle(): Promise<CourseType.CourseResponse[]> {
    return this.service.execute()
  }
}
