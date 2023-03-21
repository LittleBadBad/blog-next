import { Media } from './Media';
import { User } from './User';
import { Category } from './Category';

export interface Post {
  id: number;
  attributes: {
    estReadingTime?: string;
    body?: string;
    slug?: string;
    categories: { data: Category[] };
    excerpt?: string;
    title?: string;
    author?: { data: User };
    mainImage?: { data: Media };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
}
