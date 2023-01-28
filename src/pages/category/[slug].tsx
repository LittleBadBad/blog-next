import Articles from "../../components/articles"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {collection} from "strapi-common-api";
import {Category} from "../../types/Category";

const Category = ({category, categories}: { category: Category, categories: Category[] }) => {
    const seo = {
        metaTitle: category.attributes.name,
        metaDescription: `All ${category.attributes.name} articles`,
    }

    return (
        <Layout categories={categories}>
            <Seo seo={seo}/>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h1>{category.attributes.name}</h1>
                    <Articles articles={category.attributes.articles.data}/>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const categories = await collection.getMany<Category>('categories').then(r => r.data)//fetchAPI("/categories")

    return {
        paths: categories.map((category) => ({
            params: {
                slug: category.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const category = await collection.getMany<Category>("categories", {
        filters: {
            slug: {
                $eq: params.slug
            }
        },
        populate: {
            articles:{
                populate:["cover"]
            }
        }
    }).then(r => r.data[0])//(await fetchAPI(`/categories?slug=${params.slug}`))[0]
    const categories = await collection.getMany<Category>('categories').then(r => r.data)

    return {
        props: {category, categories},
        revalidate: 1,
    }
}

export default Category
