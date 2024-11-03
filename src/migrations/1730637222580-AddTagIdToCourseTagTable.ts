import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm'

export class AddTagIdToCourseTagTable1730637222580
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'course_tags_tag',
      new TableColumn({
        name: 'tagId',
        type: 'uuid',
        isNullable: true,
      }),
    )

    await queryRunner.createForeignKey(
      'course_tags_tag',
      new TableForeignKey({
        name: 'course_tags_tag',
        columnNames: ['tagId'],
        referencedTableName: 'tag',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('course_tags_tag', 'course_tags_tag')
    await queryRunner.dropColumn('course_tags_tag', 'tagId')
  }
}
