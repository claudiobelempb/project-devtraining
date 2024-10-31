import { Body, Controller, Param, Put } from '@nestjs/common'
import { CourseUpdateService } from '../services/update-course.service'
import { UpdateCourseDTO } from '../dto/update-course.dto'

@Controller('courses')
export class UpdateCourseController {
  constructor(private readonly service: CourseUpdateService) {}

  @Put(':id')
  handle(
    @Param('id') id: number,
    @Body() request: UpdateCourseDTO,
  ): Promise<UpdateCourseDTO> {
    return this.service.execute(id, request)
  }
}
