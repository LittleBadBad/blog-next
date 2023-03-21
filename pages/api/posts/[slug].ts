import { NextApiRequest, NextApiResponse } from "next";
import { collection } from "@lib/strapi";
import { Post } from "@models/Post";
import { PostProp, toPostProp } from "@lib/propTypes";

export default async function Slug(req: NextApiRequest, res: NextApiResponse<PostProp>) {
  const { data } = await collection.getMany<Post>("posts", {
    filters: {
      slug: req.query.slug || ""
    },
    pagination: {
      start: 0,
      limit: 1,
      withCount: false
    },
    populate: {
      author: {
        populate: ["image"]
      },
      mainImage: {
        populate: "*"
      },
      categories: {
        populate: "*"
      }
    }
  });
  res.json(toPostProp(data[0]));
}