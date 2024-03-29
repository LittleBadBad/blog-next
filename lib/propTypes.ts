import { Media } from "@models/Media";
import { MediaFormat } from "@models/MediaFormat";
import { User } from "@models/User";
import { Category } from "@models/Category";
import { Post } from "@models/Post";
import { SiteConfig } from "@models/SiteConfig";

export type AuthorProp = {
  id: number;
  bio: string;
  name: string;
  image: Media;
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

export type Aspect = "landscape" | "square"

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

const defaultSiteConfigProp: SiteConfigProp = {
  copyright: "",
  description: "",
  email: "",
  logo: defaultMedia,
  logoalt: defaultMedia,
  openGraphImage: defaultMedia,
  phone: "",
  title: "",
  url: "",
  w3ckey: ""
};

export function toAuthorProp(author?: User): AuthorProp {
  return {
    ...defaultAuthorProp,
    id: author?.id || 0,
    ...author?.attributes || {},
    image: author?.attributes.image?.data || defaultMedia
  };
}

export function toCategoryProp(c?: Category): CategoryProp {
  return {
    ...defaultCategoryProp,
    id: c?.id || 0,
    ...c?.attributes || {}
  };
}

export function toPostProp(a: Post): PostProp {
  return {
    ...defaultPostProp,
    id: a.id,
    ...a.attributes,
    author: toAuthorProp(a.attributes.author?.data),
    categories: (a.attributes.categories?.data || []).map(c => toCategoryProp(c)),
    mainImage: a.attributes.mainImage?.data || defaultMedia
  };
}

export function toSiteConfigProp(s?: SiteConfig): SiteConfigProp {
  return {
    ...defaultSiteConfigProp,
    ...s?.attributes || {},
    logo: s?.attributes.logo?.data || defaultMedia,
    logoalt: s?.attributes.logoalt?.data || defaultMedia,
    openGraphImage: s?.attributes.openGraphImage?.data || defaultMedia
  };
}
