import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm'

export class AddCourseIdToCourseTagTable1730636060651
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'course_tags_tag',
      new TableColumn({
        name: 'courseId',
        type: 'uuid',
        isNullable: true,
      }),
    )

    await queryRunner.createForeignKey(
      'course_tags_tag',
      new TableForeignKey({
        name: 'course_tags_course',
        columnNames: ['courseId'],
        referencedTableName: 'course',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('course_tags_tag', 'course_tags_course')
    await queryRunner.dropColumn('course_tags_tag', 'courseId')
  }
}
