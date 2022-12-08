export interface IClient {
  id: number;
  name: string;
  surname: string;
  middlename: string;
  createdAt: number;
  modifiedAt: number;
  contacts: Array<{[K: string]: string}>
}