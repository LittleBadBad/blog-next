import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "@/models/Post";
import { PostProp } from "@/model-view";
import { toPostProp } from "@/lib-back/propTypes";
import { collection } from "@/lib-back/strapi";

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