import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { ISuccessStory } from '../interface/ISuccessStory';

@Injectable()
export class StoryService {
  constructor() {}

  private async post(data: any): Promise<any> {
    try {
      const res: AxiosResponse = await axios.post<any>(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
        data,
        {
          headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
            'Content-Type': 'application/json; charset=utf-8',
          },
        },
      );
      console.log('*RES', res);
      return res.data;
    } catch (err: any) {
      return -1;
    }
  }

  public async getHomelessDogAmount(): Promise<number> {
    return 0;
  }

  public async getSuccessStories(): Promise<ISuccessStory[]> {
    return null;
  }

  public async getSuccessStory(id: string): Promise<ISuccessStory> {
    const data = `query successStoriesEntryQuery {
        successStories(id: ${id}) {
          sys {
            id
          }
          dogName,
          onwerName,
          familyPicture{url}
        }
      }`;
    console.log('*id', id);
    this.post(data);
    return null;
  }
}
