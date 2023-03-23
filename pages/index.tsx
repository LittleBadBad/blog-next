import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";
import defaultOG from "../public/img/opengraph.jpg";
import GetImage from "@lib-front/getImage";
import PostList from "@components/postlist";
import { GetStaticProps } from "@node_modules/next";
import { getPosts, getSiteConfig } from "@lib-front/services";
import { PostProp, SiteConfigProp } from "@model-view";

type IndexProps = { posts: PostProp[], siteConfig: SiteConfigProp, preview: boolean }

export default function Post(props: IndexProps) {
  const { posts, siteConfig, preview } = props;

  const router = useRouter();

  const ogimage = siteConfig?.openGraphImage
    ? GetImage(siteConfig?.openGraphImage).src
    : defaultOG.src;
  return (
    <>
      {posts && siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title={`${siteConfig?.title}`}
            description={siteConfig?.description || ""}
            canonical={siteConfig?.url}
            openGraph={{
              url: siteConfig?.url,
              title: `${siteConfig?.title}`,
              description: siteConfig?.description || "",
              images: [
                {
                  url: ogimage,
                  width: 800,
                  height: 600,
                  alt: ""
                }
              ],
              site_name: "Stablo"
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          />
          <Container>
            <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
              {posts.slice(0, 2).map(post => (
                <PostList
                  key={post.id}
                  post={post}
                  aspect="landscape"
                  preloadImage={true}
                />
              ))}
            </div>
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
              {posts.slice(2).map(post => (
                <PostList
                  key={post.id}
                  post={post}
                  aspect="square"
                />
              ))}
            </div>
          </Container>
        </Layout>
      )}
    </>
  );
}

// todo
export const getStaticProps: GetStaticProps<IndexProps> = async ({ params, preview = false }) => {
  const posts = await getPosts();
  const siteConfig = await getSiteConfig();

  return {
    props: {
      posts,
      siteConfig,
      preview: false
    },
    revalidate: 86400
  };
};
