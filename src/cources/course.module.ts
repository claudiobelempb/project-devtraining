import { Module } from '@nestjs/common'
import { CreateCourseController } from './constollers/create-cource.controller'
import { FindAllCourseController } from './constollers/findall-cource.controller'
import { FindByIdCourseController } from './constollers/findbyid-cource.controller'
import { UpdateCourseController } from './constollers/update-cource.controller'
import { DeleteCourseController } from './constollers/delete-cource.controller'
import { CourseCreateService } from './services/create-course.service'
import { CourseFindAllService } from './services/findall-course.service'
import { CourseFindByIdService } from './services/findbyid-course.service'
import { CourseUpdateService } from './services/update-course.service'
import { CourseDeleteService } from './services/delete-course.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Course } from './entities/course.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [
    CreateCourseController,
    FindAllCourseController,
    FindByIdCourseController,
    UpdateCourseController,
    DeleteCourseController,
  ],
  providers: [
    CourseCreateService,
    CourseFindAllService,
    CourseFindByIdService,
    CourseUpdateService,
    CourseDeleteService,
  ],
})
export class CourseModule {}
