import {getStrapiMedia} from "../lib/media"
import NextImage from "next/image"
import {Media} from "../types/Media";
import {CSSProperties} from "react";

const Image = ({image, style}: { image: Media, style?: CSSProperties }) => {
    const {url, alternativeText, width, height} = image.attributes

    const loader = () => {
        return getStrapiMedia(image)
    }

    return (
        <NextImage
            style={style}
            loader={loader}
            width={width}
            height={height}
            src={url}
            alt={alternativeText || ""}
        />
    )
}

export default Image
