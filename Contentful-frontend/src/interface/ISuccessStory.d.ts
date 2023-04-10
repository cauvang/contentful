export interface ISuccessStory {
  dogName: string;
  onwerName: string;
  familyPicture: string;
}

export interface IPicture {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string; //"image/png"
    };
  };
}

export interface IDogHomeless {
  dogHomeless: number;
}
