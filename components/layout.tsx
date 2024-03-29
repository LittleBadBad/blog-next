import { ReactNode } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import GetImage from "@utils/getImage";
import Navbar from "@components/navbar";
// import defaultOG from "../public/img/og-default.jpg";

import Footer from "@components/footer";
import { SiteConfigProp } from "@lib/propTypes";
// import PopupWidget from "../components/popupWidget";

export default function Layout(props: { children: ReactNode } & SiteConfigProp) {
  const { children } = props;
  const ogimage = GetImage(props?.openGraphImage)?.src ?? "";
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.sanity.io/" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io//" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [{
            url: ogimage,
            width: 800,
            height: 600,
            alt: props.title
          }],
          site_name: props.title
        }}
        twitter={{
          handle: "@surjithctly",
          site: "@surjithctly",
          cardType: "summary_large_image"
        }}
      />

      <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400 flex flex-col min-h-screen">
        <div className="grow">
          <Navbar {...props} />
          <div>{children}</div>
        </div>

        <Footer {...props} />
      </div>
    </>
  );
}
