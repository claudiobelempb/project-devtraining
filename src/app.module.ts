import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CourseModule } from './modules/cource/course.module'
import { DatabaseModule } from './modules/database/database.module'

@Module({
  imports: [CourseModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
