export type Service = {
  id: number;
  name: string;
  link: string;
  shortDescription: string;
  included: Array<{ name: string; subItems?: Array<string> }>;
};
