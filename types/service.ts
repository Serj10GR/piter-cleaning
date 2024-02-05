export type Service = {
  id: number;
  name: string;
  shortDescription: string;
  included: Array<{ name: string; subItems?: Array<string> }>;
};
