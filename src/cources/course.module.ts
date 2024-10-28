import { Module } from '@nestjs/common'
import { CreateCourseController } from './create-cource.controller'
import { FindAllCourseController } from './findall-cource.controller'
import { FindByIdCourseController } from './findbyid-cource.controller'

@Module({
  imports: [],
  controllers: [
    CreateCourseController,
    FindAllCourseController,
    FindByIdCourseController,
  ],
  providers: [],
})
export class CourseModule {}
