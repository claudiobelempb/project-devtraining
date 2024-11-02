import { Injectable } from '@nestjs/common'
import { CourseType } from '../responses/course.response'
import { Repository } from 'typeorm'
import { Course } from '../../domain/entities/course.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Tag } from 'src/modules/tag/domain/entities/tag.entity'

@Injectable()
export class CourseCreateService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}
  async execute(request: CourseType.CourseResponse): Promise<Course> {
    const tags = await Promise.all(
      request.tags.map(tag => this.preloadTagByName(tag.id)),
    )
    const course = this.courseRepository.create({
      ...request,
      tags,
    })
    return this.courseRepository.save(course)
  }

  private async preloadTagByName(id: string): Promise<Tag> {
    const tag = await this.tagRepository.findOne({ where: { id } })
    if (tag) {
      return tag
    }
    return this.tagRepository.create({ id })
  }
}
