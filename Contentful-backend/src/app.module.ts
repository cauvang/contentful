import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APIStoryModule } from './module/usingAPI/story.module';
import { ConfigModule } from '@nestjs/config';
import { GraphStoryModule } from './module/usingGraphQL/story.module';

@Module({
  imports: [APIStoryModule, GraphStoryModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}