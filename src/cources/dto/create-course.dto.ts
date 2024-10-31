import { PartialType } from '@nestjs/mapped-types'
import { CourseDTO } from './course.dto'

export class CreateCourseDTO extends PartialType(CourseDTO) {}
