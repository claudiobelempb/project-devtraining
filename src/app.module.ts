import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CourseModule } from './cources/course.module'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [CourseModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
