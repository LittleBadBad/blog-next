import { User } from "@/models/User";
import { Category } from "@/models/Category";
import { Post } from "@/models/Post";
import { SiteConfig } from "@/models/SiteConfig";
import { Link } from "@/models/Link";
import { LinkList } from "@/models/LinkList";
import {
  AuthorProp,
  CategoryProp,
  defalutLinkListProp,
  defaultAuthorProp,
  defaultCategoryProp,
  defaultLink,
  defaultMedia,
  defaultPostProp,
  defaultSiteConfigProp,
  LinkListProp,
  LinkProp,
  PostProp,
  SiteConfigProp
} from "@/model-view";

export type Aspect = "landscape" | "square"


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
    categories: (a.attributes.categories?.data || []).map(toCategoryProp),
    mainImage: a.attributes.mainImage?.data || defaultMedia
  };
}

export function toLinkProp(l?: Link): LinkProp {
  return {
    ...defaultLink,
    ...l?.attributes || {}
  };
}

export function toLinkListProp(ll?: LinkList): LinkListProp {
  return {
    ...defalutLinkListProp,
    ...ll?.attributes || {},
    links: ll?.attributes.links.data.map(toLinkProp) || []
  };
}

export function toSiteConfigProp(s?: SiteConfig): SiteConfigProp {
  return {
    ...defaultSiteConfigProp,
    ...s?.attributes || {},
    logo: s?.attributes.logo?.data || defaultMedia,
    logoalt: s?.attributes.logoalt?.data || defaultMedia,
    openGraphImage: s?.attributes.openGraphImage?.data || defaultMedia,
    headNav: toLinkListProp(s?.attributes.headNav?.data)
  };
}
