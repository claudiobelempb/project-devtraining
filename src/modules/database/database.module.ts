import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Course } from 'src/modules/cource/domain/entities/course.entity'
import { DataSourceOptions } from 'typeorm'
import { Tag } from '../tag/domain/entities/tag.entity'
export const dataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'devtrainig',
  entities: [Course, Tag],
  synchronize: true,
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
