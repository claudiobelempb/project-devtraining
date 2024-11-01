import { Injectable } from '@nestjs/common'
import { CourseType } from '../response/course.response'
import { Course } from '../entities/course.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class CourseFindAllService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}
  async execute(): Promise<CourseType.CourseResponse[]> {
    return await this.courseRepository.find()
  }
}
