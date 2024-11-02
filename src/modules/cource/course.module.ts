import { Module } from '@nestjs/common'
import { CreateCourseController } from './constollers/create-cource.controller'
import { FindAllCourseController } from './constollers/findall-cource.controller'
import { FindByIdCourseController } from './constollers/findbyid-cource.controller'
import { UpdateCourseController } from './constollers/update-cource.controller'
import { DeleteCourseController } from './constollers/delete-cource.controller'
import { CourseCreateService } from './application/usecases/course-create.service'
import { CourseFindAllService } from './application/usecases/course-findall.service'
import { CourseFindByIdService } from './application/usecases/course-findbyid.service'
import { CourseUpdateService } from './application/usecases/course-update.service'
import { CourseDeleteService } from './application/usecases/course-delete.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Course } from './domain/entities/course.entity'

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
