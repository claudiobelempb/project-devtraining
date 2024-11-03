import { DataSource } from 'typeorm'
import { dataSourceOption } from './database.module'
import { CreateCourseTable1730578901884 } from 'src/migrations/1730578901884-CreateCourseTable'
import { CreateTagTable1730633338342 } from 'src/migrations/1730633338342-CreateTagTable'
import { CreateCourseTagTable1730635203277 } from 'src/migrations/1730635203277-CreateCourseTagTable'
import { AddCourseIdToCourseTagTable1730636060651 } from 'src/migrations/1730636060651-AddCourseIdToCourseTagTable'
import { AddTagIdToCourseTagTable1730637222580 } from 'src/migrations/1730637222580-AddTagIdToCourseTagTable'

export const dataSource = new DataSource({
  ...dataSourceOption,
  synchronize: false,
  migrations: [
    CreateCourseTable1730578901884,
    CreateTagTable1730633338342,
    CreateCourseTagTable1730635203277,
    AddCourseIdToCourseTagTable1730636060651,
    AddTagIdToCourseTagTable1730637222580,
  ],
})
