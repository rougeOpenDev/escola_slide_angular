import { CourseClass } from './course-class.model';
import { Status } from './status.model';

export interface Course {

  id: string,
  label: string,
  description: string,
  tags: string[],
  imgSrc?: string,

  signed?: boolean,
  status?: Status,
  classes?: CourseClass[]
}
