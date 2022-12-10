export interface IClient {
  id: number;
  name: string;
  lastname: string;
  middlename?: string;
  createdAt: number;
  modifiedAt: number;
  contacts: Array<{[K: string]: string}>
}

export interface IFormData {
  name: string;
  lastname: string;
  middlename?: string;
  contacts: Array<{[K: string]: string}>
}