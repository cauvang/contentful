import { Module } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';

@Module({
  imports: [],
  controllers: [StoryController],
  providers: [StoryService],
  exports: [StoryService],
})
export class APIStoryModule {}
