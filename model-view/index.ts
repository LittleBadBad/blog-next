import { Media } from "@/models/Media";
import { MediaFormat } from "@/models/MediaFormat";

export type AuthorProp = {
  id: number;
  bio: string;
  name: string;
  image: Media;
}

export type LinkProp = {
  label: string;
  href: string;
  desc: string;
  external: boolean;
  badge: string;
}

export type LinkListProp = {
  label: string;
  links: LinkProp[];
  desc: string;
}

export type CategoryProp = {
  id: number
  title: string;
  color: string;
}

export type SiteConfigProp = {
  phone: string;
  email: string;
  w3ckey: string;
  copyright: string;
  logoalt: Media;
  logo: Media;
  url: string;
  description: string;
  title: string;
  openGraphImage: Media;
  headNav: LinkListProp
}

export type PostProp = {
  estReadingTime: string;
  body: string;
  slug: string;
  categories: CategoryProp[];
  id: number;
  createdAt: string;
  publishedAt: string;
  excerpt: string;
  title: string;
  author: AuthorProp;
  mainImage: Media;
}

export const defaultFormat: MediaFormat = {
  ext: "",
  hash: "",
  height: 0,
  mime: "",
  name: "",
  path: "",
  size: 0,
  url: "",
  width: 0
};
export const defaultMedia: Media = {
  attributes: {
    alternativeText: "",
    caption: "",
    createdAt: "undefined",
    ext: "",
    hash: "",
    height: 0,
    mime: "",
    name: "",
    previewUrl: "",
    provider: "",
    size: 0,
    updatedAt: "undefined",
    publishedAt: "",
    url: "",
    width: 0,
    formats: {
      thumbnail: defaultFormat,
      medium: defaultFormat,
      small: defaultFormat
    }
  }, id: 0
};

export const defaultLink: LinkProp = { badge: "", desc: "", external: false, href: "", label: "" };
export const defalutLinkListProp: LinkListProp = { desc: "", label: "", links: [] };
export const defaultCategoryProp: CategoryProp = { id: 0, color: "", title: "" };
export const defaultAuthorProp: AuthorProp = { bio: "", id: 0, image: defaultMedia, name: "" };
export const defaultPostProp: PostProp = {
  author: defaultAuthorProp,
  body: "",
  categories: [],
  createdAt: "",
  estReadingTime: "",
  excerpt: "",
  id: 0,
  mainImage: defaultMedia,
  publishedAt: "",
  slug: "",
  title: ""
};

export const defaultSiteConfigProp: SiteConfigProp = {
  copyright: "",
  description: "",
  email: "",
  logo: defaultMedia,
  logoalt: defaultMedia,
  openGraphImage: defaultMedia,
  phone: "",
  title: "",
  url: "",
  w3ckey: "",
  headNav: defalutLinkListProp
};