import { Status } from './status.model';

export interface Course {

  id: string,
  label: string,
  description: string,
  tags: string[],
  imgSrc?: string,
  status?: Status
}
