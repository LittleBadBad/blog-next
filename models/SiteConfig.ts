import { Media } from './Media';
import { LinkList } from "@models/LinkList";

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
    headNav?: { data: LinkList };
    openGraphImage?: { data: Media };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
}
