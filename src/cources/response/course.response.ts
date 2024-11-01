import { IsString } from 'class-validator'

export namespace CourseType {
  export class CourseResponse {
    id?: number
    @IsString()
    readonly name: string
    @IsString()
    readonly description: string
    @IsString({ each: true })
    readonly tags: string[]
  }
}
