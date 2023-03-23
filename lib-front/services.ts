import axios from "axios";
import { AuthorProp, PostProp, SiteConfigProp } from "@model-view";

export const httpService = axios.create({ baseURL: "http://localhost:3000" });

export async function getSiteConfig(): Promise<SiteConfigProp> {
  return await httpService.get("/api/site-config")
    .then(r => r.data);
}

export async function getPosts(page = 1, pageSize = 10): Promise<PostProp[]> {
  return await httpService.get("/api/posts")
    .then(r => r.data);
}

export async function getPost(slug = ""): Promise<PostProp> {
  return await httpService.get<PostProp>(`/api/posts/${slug}`)
    .then(r => r.data);
}

export async function getAuthors(): Promise<AuthorProp[]> {
  return await httpService.get<AuthorProp[]>(`/api/authors`)
    .then(r => r.data);
}