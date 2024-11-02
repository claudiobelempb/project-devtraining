import { IsArray, IsString } from 'class-validator'
import { Tag } from 'src/modules/tag/domain/entities/tag.entity'

export namespace CourseType {
  export class CourseResponse {
    @IsString()
    readonly name: string
    @IsString()
    readonly description: string
    @IsArray()
    readonly tags: Tag[]
  }
}
