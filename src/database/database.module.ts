import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Course } from 'src/cources/entities/course.entity'
import { DataSourceOptions } from 'typeorm'
export const dataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'devtrainig',
  entities: [Course],
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
