import { IsString } from 'class-validator'
import { Tag } from 'src/modules/tag/domain/entities/tag.entity'

export namespace CourseType {
  export class CourseResponse {
    id?: string
    @IsString()
    readonly name: string
    @IsString()
    readonly description: string
    @IsString({ each: true })
    readonly tags: Tag[]
  }
}
