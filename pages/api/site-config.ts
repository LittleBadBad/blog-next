import { NextApiRequest, NextApiResponse } from "next";
import { SiteConfig } from "@/models/SiteConfig";
import { SiteConfigProp } from "@/model-view";
import { toSiteConfigProp } from "@/lib-back/propTypes";
import { collection } from "@/lib-back/strapi";

export default async function _SiteConfig(req: NextApiRequest, res: NextApiResponse<SiteConfigProp>) {


  const { data } = await collection.getMany<SiteConfig>("site-configs", {
    sort: {
      publishedAt: "DESC"
    },
    pagination: {
      start: 0,
      limit: 1,
      withCount: false
    },
    populate: {
      logo: "*",
      logoalt: "*",
      openGraphImage: "*",
      headNav: {
        populate: ["links"]
      }
    }
  });
  res.json(toSiteConfigProp(data[0]));
}