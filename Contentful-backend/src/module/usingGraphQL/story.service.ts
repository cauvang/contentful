import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { ISuccessStory } from '../interface/ISuccessStory';

@Injectable()
export class StoryService {
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
      return res.data;
    } catch (err: any) {
      return -1;
    }
  }

  public async getHomelessDogAmount(): Promise<number> {
    const data = {
      query: `query dogHomelessNumberEntryQuery {
      dogHomelessNumber(id: "eHzHfgZaRU2M1UfuNOi3B") {
        sys {
          id
        }
        dogHomeless
      }
    }`,
    };
    const res = await this.post(data);
    return res.data.dogHomelessNumber.dogHomeless;
  }

  public async getSuccessStories(): Promise<ISuccessStory[]> {
    const data = {
      query: `query successStoriesCollectionQuery {
      successStoriesCollection {
        items {
          sys {
            id
          }
           dogName,
              onwerName,
              familyPicture{url}
        }
      }
    }`,
    };
    const res = await this.post(data);
    const stories = res.data.successStoriesCollection.items;

    return stories.map((item) => {
      return {
        dogName: item.dogName,
        onwerName: item.onwerName,
        familyPicture: item.familyPicture.url,
      };
    });
  }

  public async getSuccessStory(id: string): Promise<ISuccessStory> {
    const data = {
      query: `query successStoriesEntryQuery {
        successStories(id: ${id}) {
          sys {
            id
          }
          dogName,
          onwerName,
          familyPicture{url}
        }
      }`,
    };
    const res = await this.post(data);
    return res.data;
  }
}
