import { Module } from '@nestjs/common'
import { CreateCourseController } from './create-cource.controller'
import { FindAllCourseController } from './findall-cource.controller'
import { FindByIdCourseController } from './findbyid-cource.controller'
import { UpdateCourseController } from './update-cource.controller'
import { DeleteCourseController } from './delete-cource.controller'

@Module({
  imports: [],
  controllers: [
    CreateCourseController,
    FindAllCourseController,
    FindByIdCourseController,
    UpdateCourseController,
    DeleteCourseController,
  ],
  providers: [],
})
export class CourseModule {}
