import type { Media } from "@models/Media";
import { ImageLoader, ImageProps } from "@node_modules/next/dist/client/image";
import { defaultMedia } from "@model-view";

export type ImageP = {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
} & ImageProps

const defaultLoader: ImageLoader = (resolverProps) => {
  return resolverProps.src;
};
export default function GetImage(image: Media | string = defaultMedia, CustomImageBuilder: ImageLoader = defaultLoader): ImageP {
  if (typeof image === "string") {
    return { height: 100, width: 100, src: image, loader: CustomImageBuilder };
  } else {
    return {
      src: image.attributes.url,
      height: image.attributes.height,
      width: image.attributes.width,
      loader: CustomImageBuilder,
      blurDataURL: image.attributes.formats?.thumbnail.url ||
        image.attributes.formats?.small.url ||
        image.attributes.formats?.medium.url ||
        image.attributes.url
    };
  }
}
