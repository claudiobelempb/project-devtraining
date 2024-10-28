import { Controller, Get, Post } from '@nestjs/common'

@Controller('courses')
export class CreateCourseController {
  constructor() {}

  @Post()
  handle(): string {
    return 'Create Course Controller'
  }
}
