import React from "react"
import Link from "next/link"
import NextImage from "./image"
import {Article} from "../types/Article";
import {ErrorImg} from "../lib/media";

const Card = ({article}: { article: Article["attributes"] }) => {
    return (
        <Link href={`/article/${article.slug}`} className="uk-link-reset">
            <div className="uk-card uk-card-muted">
                <div className="uk-card-media-top">
                    <NextImage image={article.cover?.data || ErrorImg} style={undefined}/>
                </div>
                <div className="uk-card-body">
                    <p id="category" className="uk-text-uppercase">
                        {article?.category?.data.attributes.name}
                    </p>
                    <p id="title" className="uk-text-large">
                        {article.title}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Card
