import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { APIStoryModule } from './module/usingAPI/story.module';
import { GraphStoryModule } from './module/usingGraphQL/story.module';
import { CMAModule } from './module/usingCMA/story.module';

@Module({
  imports: [
    APIStoryModule,
    GraphStoryModule,
    CMAModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
