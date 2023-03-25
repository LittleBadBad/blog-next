import Container from "@/components/container";
import Layout from "@/components/layout";
import GetImage from "@/lib-front/getImage";
import Image from "next/image";
import Link from "next/link";
import { AuthorProp, SiteConfigProp } from "@/model-view";
import { getAuthors, getSiteConfig } from "@/lib-front/services";

export default function About({ authors, siteconfig }: { authors: AuthorProp[], siteconfig: SiteConfigProp }) {
  return (
    <Layout {...siteconfig}>
      <Container>
        <h1
          className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          About
        </h1>
        <div className="text-center">
          <p className="text-lg">We are a small passionate team.</p>
        </div>

        <div className="grid grid-cols-3 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
          {authors.slice(0, 3).map((author, i) => {
            const { width, height, ...imgprops } = GetImage(
              author?.image
            );
            return (
              <div className={"flex-col"} key={author.id}>
                <div
                  className="relative rounded-full overflow-hidden aspect-square">
                  <Image
                    {...imgprops}
                    alt={author.name || " "}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 320px) 100vw, 320px"
                  />
                </div>
                <h2
                  className="mt-2 text-lg font-semibold tracking-normal text-center text-brand-primary dark:text-white">
                  {author.name || `author ${i + 1}`}
                </h2>
              </div>
            );
          })}
        </div>

        <div className="mx-auto prose text-center dark:prose-invert mt-14">
          <p>
            We provide real-time connectivity to enable software
            providers and financial institutions to build integrated
            products for their small business customers.
          </p>
          <p>
            Our API infrastructure is leveraged by clients ranging
            from lenders to corporate card providers and business
            forecasting tools, with use cases including automatic
            reconciliation, business dashboarding, and loan
            decisioning.
          </p>
          <p>
            <Link href="/contact">Get in touch</Link>
          </p>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  //console.log(params);
  const authors = await getAuthors();// await getClient(preview).fetch(authorsquery);
  const siteconfig = await getSiteConfig();
  return {
    props: {
      authors,
      siteconfig,
      preview
    },
    revalidate: 86400
  };
}
