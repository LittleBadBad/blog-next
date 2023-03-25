import { NextSeo } from "next-seo";
import Layout from "@/components/layout";
import Container from "@/components/container";
import { useRouter } from "next/router";
import defaultOG from "../public/img/opengraph.jpg";
import GetImage from "@/lib-front/getImage";
import PostList from "@/components/postlist";
import { getPosts, getSiteConfig } from "@/lib-front/services";
import { PostProp, SiteConfigProp } from "@/model-view";

export default function Post(props: { posts: PostProp[], siteConfig: SiteConfigProp, preview: boolean }) {
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
            title={`Blog — ${siteConfig?.title}`}
            description={siteConfig?.description || ""}
            canonical={siteConfig?.url}
            openGraph={{
              url: siteConfig?.url,
              title: `Blog — ${siteConfig?.title}`,
              description: siteConfig?.description || "",
              images: [{
                url: ogimage,
                width: 800,
                height: 600,
                alt: ""
              }],
              site_name: "Stablo"
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          />
          <Container>
            <h1
              className="text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              Archive
            </h1>
            <div className="text-center">
              <p className="mt-2 text-lg">
                See all posts we have ever written.
              </p>
            </div>
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
              {posts.map(post => (
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
export async function getStaticProps({ params, preview = false }) {
  const posts = await getPosts();
  const siteConfig = await getSiteConfig();

  return {
    props: {
      posts,
      // categories: categories,
      siteConfig,
      preview
    },
    revalidate: 86400
  };
}
