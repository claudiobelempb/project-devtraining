import { DataSource } from 'typeorm'
import { dataSourceOption } from './database.module'
import { CreateCourseTable1730578901884 } from 'src/migrations/1730578901884-CreateCourseTable'

export const dataSource = new DataSource({
  ...dataSourceOption,
  synchronize: false,
  migrations: [CreateCourseTable1730578901884],
})
