import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class StoryService {
  private async put(data: any, endpoint: string, id = ''): Promise<any> {
    try {
      const res: AxiosResponse = await axios.put<any>(
        `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/${endpoint}/${id}`,
        {
          headers: {
            Authorization: `Bearer 3utqsWMV0MBg1qHEfLAQXuWbdCUoHstx2lyvdSgcx44`,
            'Content-Type': 'application/vnd.contentful.management.v1+json',
            'X-Contentful-Version': 2,
          },
        },
        data,
      );
      console.log('*res', res);
      return res.data;
    } catch (err: any) {
      return -1;
    }
  }

  private async get(path: string): Promise<any> {
    try {
      const res: AxiosResponse = await axios.get<any>(
        `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/${path}`,
        {
          headers: {
            Authorization: `Bearer 3utqsWMV0MBg1qHEfLAQXuWbdCUoHstx2lyvdSgcx44`,
            'Content-Type': 'application/vnd.contentful.management.v1+json',
          },
        },
      );
      return res.data;
    } catch (err: any) {
      return -1;
    }
  }

  public async getContentTypes(): Promise<any> {
    const res = await this.get('content_types');
    return {
      total: res.total,
      items: res.items.map((x) => {
        return { id: x.sys.id, fields: x.fields };
      }),
    };
  }

  public async updateContentType(id: string, data: any): Promise<any> {
    const header = {
      Authorization: `Bearer 3utqsWMV0MBg1qHEfLAQXuWbdCUoHstx2lyvdSgcx44`,
      'Content-Type': 'application/vnd.contentful.management.v1+json',
      'X-Contentful-Version': 2,
    };
    const res = this.put(data, 'content_types', id);

    return res;
  }
  public async getEntries(): Promise<any> {
    const res = await this.get('entries');
    console.log('**res');
    return res;
    // return {
    //   total: res.total,
    //   items: res.items.map((x) => {
    //     return { id: x.sys.id, fields: x.fields };
    //   }),
    // };
  }

  private async post(data: any, header: any, endpoint: string): Promise<any> {
    try {
      const res: AxiosResponse = await axios.post<any>(
        `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/${endpoint}`,
        {
          headers: {
            Authorization: `Bearer 3utqsWMV0MBg1qHEfLAQXuWbdCUoHstx2lyvdSgcx44`,
            'Content-Type': 'application/vnd.contentful.management.v1+json',
            'X-Contentful-Content-Type': 'successStories',
          },
        },
        data,
      );
      return res.data;
    } catch (err: any) {
      return -1;
    }
  }

  private async createEntry(contentTypeId: string, data: any) {
    const header = {
      Authorization: `Bearer 3utqsWMV0MBg1qHEfLAQXuWbdCUoHstx2lyvdSgcx44`,
      'Content-Type': 'application/vnd.contentful.management.v1+json',
      'X-Contentful-Content-Type': contentTypeId,
    };

    console.log('sotr', header, data);
    const res = await this.post(header, data, 'entries');
    console.log('**RES', res);
    return res;
  }

  public async createStory() {
    const data = {
      fields: {
        dogName: {
          'en-US': 'Molly!',
        },
        onwerName: {
          'en-US': 'Katrina',
        },
      },
    };
    await this.createEntry('successStories', data);
  }
}
