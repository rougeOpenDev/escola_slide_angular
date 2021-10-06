import { Status } from './status.model';

export interface User {

  id: string,
  name: string,
  cash: string,
  url?: string,

  status?: Status
}
