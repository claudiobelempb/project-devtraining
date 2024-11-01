import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Course } from '../entities/course.entity'
import { CourseType } from '../response/course.response'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
@Injectable()
export class CourseFindByIdService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async execute(id: number): Promise<CourseType.CourseResponse> {
    const course = this.courseRepository.findOne({
      where: {
        id,
      },
    })

    if (!course) {
      throw new HttpException(`Course id ${id} not found`, HttpStatus.NOT_FOUND)
    }

    return course
  }
}
