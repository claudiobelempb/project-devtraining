import { Body, Controller, Get, Param, Put } from '@nestjs/common'

type CourseType = {
  id: string
  name: string
  description: string
  password: string
  tags: string[]
}

@Controller('courses')
export class UpdateCourseController {
  constructor() {}

  @Put(':id')
  handle(@Param('id') id: string, @Body() request: CourseType): string {
    return `Find By Id ${id} ${request.description}`
  }
}
