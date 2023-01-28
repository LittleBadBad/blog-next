import {useEffect} from "react";
import {collection} from "strapi-common-api";
import {Article} from "../types/Article";

export default function Test() {
    useEffect(() => {
        collection
            .getMany<Article>("articles", {populate: ["blocks"]})
            .then(console.log)
    }, [])
    return <>haha</>
}
