import { Link } from './Link';

export interface LinkList {
  id: number;
  attributes: {
    label?: string;
    links: { data: Link[] };
    desc?: string;
  }
}
