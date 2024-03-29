// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "@models/Post";
import { collection } from "@lib/strapi";
import { defaultPostProp, PostProp, toPostProp } from "@lib/propTypes";
import { Media } from "@models/Media";

export default async function recentPosts(req: NextApiRequest, res: NextApiResponse<PostProp[]>) {
  try {
    const { data, meta } = await collection.getMany<Post>("posts", {
      pagination: {
        page: String(req.query.page || 1) || 1,
        pageSize: String(req.query.pageSize || 10) || 10,
        withCount: true
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
    // const medias = await collection.getMany<Media>("uploads", {filters:});
    // console.log(medias);
    const postProps: PostProp[] = data.map(toPostProp);
    res.json(postProps);
  } catch (e) {
    res.status(500).json([]);
  }
}
