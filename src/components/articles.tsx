import React from "react"
import Card from "./card"
import {Article} from "../types/Article";

const Articles = ({articles}: { articles: Article[] }) => {

    const leftArticlesCount = Math.ceil(articles.length / 5)
    const leftArticles = articles.slice(0, leftArticlesCount)
    const rightArticles = articles.slice(leftArticlesCount, articles.length)

    return (
        <div>
            <div className="uk-child-width-1-2@s" data-uk-grid="true">
                <div>
                    {leftArticles.map(({attributes: article}, i) => {
                        return (
                            <Card article={article} key={`article__left__${article?.slug}`}/>
                        )
                    })}
                </div>
                <div>
                    <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                        {rightArticles.map(({attributes: article}, i) => {
                            return (
                                <Card article={article}
                                      key={`article__left__${article?.slug}`}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles
