import { Controller, Delete, HttpCode, HttpStatus, Param } from '@nestjs/common'

@Controller('courses')
export class DeleteCourseController {
  constructor() {}

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  handle(@Param('id') id: string): string {
    return `Delete Id ${id} Course Controller`
  }
}
