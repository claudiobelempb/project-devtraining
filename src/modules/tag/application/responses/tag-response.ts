import { IsString } from 'class-validator'

export namespace TagType {
  export class TagResponse {
    @IsString()
    readonly name: string
  }
}
