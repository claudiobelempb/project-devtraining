import { Injectable, NotFoundException } from '@nestjs/common'
import { CourseType } from '../responses/course.response'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Course } from '../../domain/entities/course.entity'
@Injectable()
export class CourseDeleteService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}
  async execute(id: string): Promise<void> {
    try {
      const entity = await this.courseRepository.findOne({
        where: {
          id,
        },
      })
      if (!entity) {
        throw new NotFoundException(`Course id ${id} not found`)
      }

      this.courseRepository.remove(entity)
    } catch (error) {
      throw new NotFoundException(`Course id ${id} not found`)
    }
  }
}
