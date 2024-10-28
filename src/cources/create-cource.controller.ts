import { Body, Controller, Get, Post } from '@nestjs/common'

type CourseType = {
  id: string
  name: string
  description: string
  password: string
  tags: string[]
}
@Controller('courses')
export class CreateCourseController {
  constructor() {}

  @Post()
  handle(@Body() request: CourseType): CourseType {
    const course = request
    return course
  }
}
