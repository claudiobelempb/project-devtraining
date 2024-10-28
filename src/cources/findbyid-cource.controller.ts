import { Controller, Get, Param } from '@nestjs/common'

@Controller('courses')
export class FindByIdCourseController {
  constructor() {}

  @Get(':id')
  handle(@Param('id') id: string): string {
    return `Find By Id ${id} Course Controller`
  }
}
