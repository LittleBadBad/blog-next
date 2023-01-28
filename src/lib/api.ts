import env from "../env";

export function getStrapiURL(path = "") {
    return `${
        env.REACT_APP_ADMIN || "http://localhost:1337"
    }${path}`
}
