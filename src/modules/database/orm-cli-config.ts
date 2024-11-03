import { DataSource } from 'typeorm'
import { dataSourceOption } from './database.module'
import { CreateCourseTable1730578901884 } from 'src/migrations/1730578901884-CreateCourseTable'
import { CreateTagTable1730633338342 } from 'src/migrations/1730633338342-CreateTagTable'
import { CreateCourseTagTable1730635203277 } from 'src/migrations/1730635203277-CreateCourseTagTable'

export const dataSource = new DataSource({
  ...dataSourceOption,
  synchronize: false,
  migrations: [
    CreateCourseTable1730578901884,
    CreateTagTable1730633338342,
    CreateCourseTagTable1730635203277,
  ],
})
