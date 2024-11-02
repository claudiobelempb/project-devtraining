import { Controller, Delete, HttpCode, HttpStatus, Param } from '@nestjs/common'
import { CourseDeleteService } from '../services/delete-course.service'

@Controller('courses')
export class DeleteCourseController {
  constructor(private readonly service: CourseDeleteService) {}

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async handle(@Param('id') id: string): Promise<void> {
    await this.service.execute(id)
  }
}
