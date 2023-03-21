import Image from "next/image";
import ReactMarkdown, { Options } from "react-markdown";
import GetImage from "@utils/getImage";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";
import remarkMdx from "remark-mdx";
import remarkDirective from "remark-directive";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import { Media } from "@models/Media";
import { MediaFormat } from "@models/MediaFormat";
import { createStrapiClient, strapiRequest } from "../../../strapi-common-api";
import { globalConfig } from "@lib/globalConfig";
// export const urlFor = source =>
//   createImageUrlBuilder(config).image(source);
//
// export const imageBuilder = source =>
//   createImageUrlBuilder(config).image(source);
//
// export const usePreviewSubscription =
//   createPreviewSubscriptionHook(config);

// Barebones lazy-loaded image component
const ImageComponent = ({ value }) => {
  // const {width, height} = getImageDimensions(value)
  return (
    <Image
      {...GetImage(value)}
      blurDataURL={GetImage(value).blurDataURL}
      objectFit="cover"
      sizes="(max-width: 800px) 100vw, 800px"
      alt={value.alt || " "}
      placeholder="blur"
      loading="lazy"
    />
  );
};

const components = {
  image: ({ value }) => <Image
    {...GetImage(value)}
    blurDataURL={GetImage(value).blurDataURL}
    objectFit="cover"
    sizes="(max-width: 800px) 100vw, 800px"
    alt={" "}
    placeholder="blur"
    loading="lazy"
  />,
  code: props => (
    <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
  ),

  center: props => (
    <div className="text-center">{props.children}</div>
  ),
  highlight: props => (
    <span className="font-bold text-brand-primary">
        {props.children}
      </span>
  ),
  link: props => (
    <a href={props?.value?.href} target="_blank" rel="noopener">
      {props.children}
    </a>
  )
};
// Set up Portable Text serialization
export const PortableText = ({ value }: { value: string }) => (
  <ReactMarkdown
    rehypePlugins={[rehypeStringify, rehypeKatex, rehypeHighlight, rehypeFormat, rehypeRaw]}
    remarkPlugins={[remarkMath, remarkToc, remarkDirective]}>
    {value}
  </ReactMarkdown>
);

const { strapiClient, collection, single, auth } = createStrapiClient("http://localhost:1337/api");
strapiClient.interceptors.request.use((config) => {
  config.headers["authorization"] = `Bearer ${globalConfig.apiToken}`;
  return config;
});


export { strapiClient, collection, single, auth };
