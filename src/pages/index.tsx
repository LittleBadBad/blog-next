import React, {useContext} from "react"
import {collection, single} from "strapi-common-api"
import Articles from "../components/articles"
import Layout from "../components/layout"
import {Article} from "../types/Article";
import {Category} from "../types/Category";
import {Homepage} from "../types/Homepage";
import {GlobalContext} from "./_app";
import Seo from "../components/seo";

const Home = ({
                  articles,
                  categories,
                  homepage
              }: { articles: Article[], categories: Category[], homepage: Homepage }) => {
    const global = useContext(GlobalContext)

    return (
        <Layout categories={categories}>
            <Seo seo={global.defaultSeo}/>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h1>{homepage.attributes.hero?.data.attributes.title}</h1>
                    <Articles articles={articles}/>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [articles, categories, homepage] = await Promise.all([
        collection.getMany<Article>('articles', {populate: ["cover", "category", "author"]}).then(r => r.data),
        collection.getMany<Category>('categories').then(r => r.data),
        single.get<Homepage>('homepage', {populate: ["hero"]}).then(r => r.data)
    ])

    return {
        props: {articles, categories, homepage},
        revalidate: 1,
    }
}

export default Home
