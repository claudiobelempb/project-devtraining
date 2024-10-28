import { Controller, Get } from '@nestjs/common'

@Controller('courses')
export class FindAllCourseController {
  constructor() {}

  @Get()
  handle(): string {
    return 'Find all Course Controller'
  }
}
