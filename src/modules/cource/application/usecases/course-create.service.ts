import { Injectable } from '@nestjs/common'
import { CourseType } from '../responses/course.response'
import { Repository } from 'typeorm'
import { Course } from '../../domain/entities/course.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CourseCreateService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}
  async execute(
    request: CourseType.CourseResponse,
  ): Promise<CourseType.CourseResponse> {
    const entity = this.courseRepository.create(request)
    return await this.courseRepository.save(entity)
  }
}
