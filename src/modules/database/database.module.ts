import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { DataSourceOptions } from 'typeorm'
import { Tag } from '../tag/domain/entities/tag.entity'
import { Course } from '../cource/domain/entities/course.entity'
export const dataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'devtrainig',
  entities: [Course, Tag],
  synchronize: false,
}
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          ...dataSourceOption,
        }
      },
    }),
  ],
})
export class DatabaseModule {}
