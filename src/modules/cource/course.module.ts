import { Module } from '@nestjs/common'
import { CourseCreateService } from './application/usecases/course-create.service'
import { CourseFindAllService } from './application/usecases/course-findall.service'
import { CourseFindByIdService } from './application/usecases/course-findbyid.service'
import { CourseUpdateService } from './application/usecases/course-update.service'
import { CourseDeleteService } from './application/usecases/course-delete.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Course } from './domain/entities/course.entity'
import { Tag } from '../tag/domain/entities/tag.entity'
import { CreateCourseController } from './application/controllers/create-cource.controller'
import { DeleteCourseController } from './application/controllers/delete-cource.controller'
import { FindAllCourseController } from './application/controllers/findall-cource.controller'
import { FindByIdCourseController } from './application/controllers/findbyid-cource.controller'
import { UpdateCourseController } from './application/controllers/update-cource.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Course, Tag])],
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
