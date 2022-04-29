export type TextGearsResponseError = {
  bad: string;
  better: string[];
  description: {
    en: string;
  }
  en: string;
  id: string;
  length:number;
  offset: number;
  type: "spelling"
}

export type TextGearsResponse = {
  response: {
    errors:  TextGearsResponseError[];
    result: boolean;
  },
  status: boolean;
}