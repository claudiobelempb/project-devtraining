import { PartialType } from '@nestjs/mapped-types'
import { CourseDTO } from './course.dto'

export class UpdateCourseDTO extends PartialType(CourseDTO) {}
