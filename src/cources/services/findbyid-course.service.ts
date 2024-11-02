import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { Course } from '../entities/course.entity'
import { CourseType } from '../response/course.response'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler'
@Injectable()
export class CourseFindByIdService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async execute(id: string): Promise<CourseType.CourseResponse> {
    try {
      const entity = await this.courseRepository.findOne({
        where: {
          id,
        },
      })

      if (!entity) {
        throw new NotFoundException(`Course id ${id} not found`)
      }

      return entity
    } catch (error) {
      throw new NotFoundException(`Course id ${id} not found`)
    }
  }
}
