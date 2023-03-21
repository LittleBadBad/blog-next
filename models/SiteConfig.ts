import { Media } from './Media';

export interface SiteConfig {
  id: number;
  attributes: {
    phone?: string;
    email?: string;
    w3key?: string;
    copyright?: string;
    logoalt?: { data: Media };
    logo?: { data: Media };
    url?: string;
    description?: string;
    title?: string;
    openGraphImage?: { data: Media };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
}
