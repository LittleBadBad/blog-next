import {getStrapiURL} from "./api"
import {Media} from "../types/Media";

export const ErrorImg: Media = {
    id: 0,
    attributes: {
        url: "/uploads/26_7284d2bb6e.jpg?updated_at=2023-01-26T08:45:30.614Z",
        name: "error",
        alternativeText: "error",
        caption: "error",
        width: 100,
        height: 100,
        hash: "",
        ext: "",
        mime: "",
        size: 100,
        previewUrl: "",
        provider: "",
        createdAt: "",
        updatedAt: "",
    }
}

export function getStrapiMedia(img = ErrorImg) {
    // console.log("img", img);
    const media = img.attributes
    const imageUrl = media.url.startsWith("/")
        ? getStrapiURL(media.url)
        : media.url
    return imageUrl
}
