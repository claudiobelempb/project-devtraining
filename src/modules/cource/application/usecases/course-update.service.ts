import { Injectable, NotFoundException } from '@nestjs/common'
import { Course } from '../../domain/entities/course.entity'
import { CourseType } from '../responses/course.response'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Tag } from 'src/modules/tag/domain/entities/tag.entity'

@Injectable()
export class CourseUpdateService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}
  async execute(
    id: string,
    request: CourseType.CourseResponse,
  ): Promise<CourseType.CourseResponse> {
    const tags =
      request.tags &&
      (await Promise.all(
        request.tags.map(tag => this.preloadTagByName(tag.name)),
      ))
    const entity = await this.courseRepository.preload({
      ...request,
      id,
      tags,
    })
    if (!entity) {
      throw new NotFoundException(`Course id ${id} not found`)
    }
    return this.courseRepository.save(entity)
  }
  private async preloadTagByName(name: string): Promise<Tag> {
    const tag = await this.tagRepository.findOne({ where: { name } })
    if (tag) {
      return tag
    }
    return this.tagRepository.create({ name })
  }
}
