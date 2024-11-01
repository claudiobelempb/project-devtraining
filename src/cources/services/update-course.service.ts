import { Injectable, NotFoundException } from '@nestjs/common'
import { Course } from '../entities/course.entity'
import { CourseType } from '../response/course.response'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CourseUpdateService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}
  async execute(
    id: number,
    request: CourseType.CourseResponse,
  ): Promise<CourseType.CourseResponse> {
    const entity = await this.courseRepository.preload({
      ...request,
      id,
    })
    if (!entity) {
      throw new NotFoundException(`Course id ${id} not found`)
    }
    return this.courseRepository.save(entity)
  }
}
