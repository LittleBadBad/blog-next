import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import {getStrapiMedia} from "../../lib/media"
import {collection} from "strapi-common-api";
import {Article} from "../../types/Article";
import {Category} from "../../types/Category";
import {NextApiResponse} from "next";

const Article = ({
                     article: {attributes: article},
                     categories
                 }: { article: Article, categories: Category[] }, res: NextApiResponse) => {
    if (!article)
        return res.status(404)

    const imageUrl = getStrapiMedia(article.cover?.data)

    const seo = {
        metaTitle: article.title,
        metaDescription: article.description,
        shareImage: imageUrl,
        article: true,
    }

    return (
        <Layout categories={categories}>
            <Seo seo={seo}/>
            <div>
                <div className="uk-container uk-container-small">
                    <div
                        style={{height: 300}}
                        className="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                        data-src={imageUrl}
                        data-srcset={imageUrl}
                        data-uk-img
                    >
                        <h1>{article.title}</h1>
                    </div>
                    <ReactMarkdown className={"article-content"}>
                        {`# article.content
                        
## hahaha
                        
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                    </ReactMarkdown>
                    <hr className="uk-divider-small"/>
                    <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                        <div>
                            {article.author?.data.attributes.avatar && (
                                <NextImage style={{height: 55, width: 55}}
                                           image={article.author.data.attributes.avatar.data}/>
                            )}
                        </div>
                        <div className="uk-width-expand">
                            <p className="uk-margin-remove-bottom">
                                By {article.author?.data.attributes.name}
                            </p>
                            <p className="uk-text-meta uk-margin-remove-top">
                                <Moment format="MMM Do YYYY">{article.updatedAt}</Moment>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const articles = await collection.getMany<Article>("articles").then(r => r.data)
    return {
        paths: articles.map((article) => ({
            params: {
                slug: article.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const articles = await collection.getMany<Article>('articles', {
        filters: {
            slug: {
                $eq: params.slug
            }
        },
        populate: {
            author: {
                populate: ["avatar"]
            },
            cover: {
                populate: "*"
            }
        }
    }).then(r => r.data)
    const categories = await collection.getMany<Category>('categories').then(r => r.data)
    return {
        props: {article: articles[0], categories},
        revalidate: 1,
    }
}

export default Article
