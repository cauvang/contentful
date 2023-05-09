import { Body, Controller, Get, Param, Put, Post } from '@nestjs/common';
import { StoryService } from './story.service';

@Controller('using-CMA')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get('contentTypes')
  async getContentTypes(): Promise<any> {
    return await this.storyService.getContentTypes();
  }

  @Get('entries')
  async getEntries(): Promise<any> {
    return await this.storyService.getEntries();
  }

  @Post('entry')
  async createStory(): Promise<any> {
    return await this.storyService.createStory();
  }

  // @Put('contentType/:id')
  @Put('contentType')
  async updateContentType(): // @Param('id') id: string,
  // @Body() data: any,
  Promise<any> {
    const data = {
      name: 'Test Update Content Type',
      fields: [
        {
          id: 'title',
          name: 'Title',
          required: true,
          localized: false,
          type: 'Text',
        },
        {
          id: 'body',
          name: 'Body',
          required: false,
          localized: false,
          type: 'Text',
        },
      ],
    };
    const id = 'testContent';
    return await this.storyService.updateContentType(id, data);
  }
}
