import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserInfoModule } from './modules/user-info/user-info.module';
import { CoursesModule } from './modules/courses/courses.module';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'garam501',
      database: 'userInfo',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      
      
    }),
    UserInfoModule,
    CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
