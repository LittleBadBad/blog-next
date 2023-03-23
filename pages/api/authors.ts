import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@models/User";
import { toAuthorProp } from "@lib-back/propTypes";
import { AuthorProp } from "@model-view";
import { collection } from "@lib-back/strapi";

export default async function recentPosts(req: NextApiRequest, res: NextApiResponse<AuthorProp[]>) {
  const { data, meta } = await collection.getMany<User>("users", {
    pagination: {
      page: String(req.query.page || 1) || 1,
      pageSize: String(req.query.pageSize || 10) || 10,
      withCount: true
    },
    populate: {
      image: {
        populate: "*"
      }
    }
  });
  console.log(data);
  const authorProps: AuthorProp[] = data.map(toAuthorProp);
  res.json(authorProps);
}
