import { Injectable } from '@nestjs/common';
import { createClient } from 'contentful';
import { ISuccessStory } from '../interface/ISuccessStory';

@Injectable()
export class StoryService {
  constructor() {}

  public async getSuccessStories(): Promise<ISuccessStory[]> {
    const stories = await this.getEntries('successStories');
    return stories.map((item) => {
      return {
        dogName: item.fields.dogName,
        onwerName: item.fields.onwerName,
        familyPicture: item.fields.familyPicture.fields.file.url,
      };
    });
  }

  private createClient() {
    const client = createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: process.env.CONTENTFUL_SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: process.env.CONTENTFUL_API_KEY,
    });
    return client;
  }

  public async getSuccessStory(id: string): Promise<ISuccessStory> {
    const story = await this.getEntry(id);
    return {
      dogName: story.fields.dogName,
      onwerName: story.fields.onwerName,
      familyPicture: story.fields.familyPicture.fields.file.url,
    };
  }

  private async getEntry(id: string): Promise<any> {
    try {
      const client = this.createClient();
      // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
      const entry = await client.getEntry(id);
      return entry.fields;
    } catch (error) {}
  }

  private async getEntries(id: string): Promise<any> {
    try {
      const client = this.createClient();
      // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
      const entries = await client.getEntries({
        'sys.contentType.sys.id': id,
      });
      return entries.items;
    } catch (error) {}
  }

  public async getHomelessDogAmount(): Promise<number> {
    const res = await this.getEntry('eHzHfgZaRU2M1UfuNOi3B');
    return res.dogHomeless;
  }
}
