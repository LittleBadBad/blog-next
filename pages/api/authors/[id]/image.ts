import { NextApiRequest, NextApiResponse } from "next";
import { Media } from "@models/Media";
import { collection } from "@lib-back/strapi";

export default async function recentPosts(req: NextApiRequest, res: NextApiResponse<any[]>) {
  const { data, meta } = await collection.getMany<Media>("uploads", {
    pagination: {
      start: 0,
      limit: 1,
      withCount: true
    }
  });
  // const medias = await collection.getMany<Media>("uploads", {filters:});
  console.log(data);
  // const authorProps: AuthorProp[] = data.map(toAuthorProp);
  res.json(data);
}