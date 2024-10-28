import { Module } from '@nestjs/common'
import { CreateCourseController } from './create-cource.controller'
import { FindAllCourseController } from './findall-cource.controller'

@Module({
  imports: [],
  controllers: [CreateCourseController, FindAllCourseController],
  providers: [],
})
export class CourseModule {}
