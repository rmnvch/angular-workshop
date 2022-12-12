export interface IClient {
  id: number;
  name: string;
  lastname: string;
  middlename?: string;
  createdAt: number;
  modifiedAt: number;
  contacts: Array<{type: string; value: string}>
}

export interface IFormData {
  name: string;
  lastname: string;
  middlename?: string;
  contacts: Array<{type: string; value: string}>
}

export type ModalTypes = 'new' | 'edit' | 'delete';