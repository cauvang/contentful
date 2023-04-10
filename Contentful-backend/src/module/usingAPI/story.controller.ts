import { Controller, Get, Param } from '@nestjs/common';
import { StoryService } from './story.service';
import { ISuccessStory } from '../interface/ISuccessStory';

@Controller('using-API')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get('/homelessDog')
  async getHomelessDogAmount(): Promise<number> {
    return await this.storyService.getHomelessDogAmount();
  }
  @Get('/successStories')
  async getSuccessStories(): Promise<ISuccessStory[]> {
    return await this.storyService.getSuccessStories();
  }

  @Get('/successStories/:id')
  async getSuccessStory(@Param('id') id: string): Promise<ISuccessStory> {
    //id = '1Pd82gwCCtUIMNR81fJCQ2';
    return await this.storyService.getSuccessStory(id);
  }
}
